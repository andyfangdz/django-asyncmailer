from celery import shared_task
from django.template.loader import render_to_string
from celery.schedules import crontab
from celery.task import periodic_task
from django.utils import timezone
from asyncmailer.models import Provider, EmailTemplate, DeferredMail
import html2text
import random


@shared_task(default_retry_delay=5, max_retries=3)
def async_select_and_send(email, title, plain_text, rich_text=None,
                          attachments=None, **kwargs):
    try:
        providers = Provider.objects.all()
        good_providers = sorted([x for x in providers if x.can_send(email)],
                                key=lambda p: p.can_send, reverse=True)
        top_preference = good_providers[0].preference
        top_providers = [provider for provider in good_providers if
                         provider.preference == top_preference]
        selected_provider = random.choice(top_providers)
        selected_provider.send(email, title, plain_text, rich_text,
                               attachments=attachments)
    except Exception as exc:
        raise async_select_and_send.retry(exc=exc)


def async_mail(email, title, context_dict=None, attachments=None,
               template='email-templates/email.html'):
    if len(email) == 1:
        rich_text = render_to_string(template, context_dict)
        plain_text = html2text.html2text(rich_text)
        async_select_and_send.delay(email[0], title, plain_text,
                                    rich_text, attachments=attachments)
    else:
        for address in email:
            async_mail(address, title, context_dict=context_dict[address],
                       attachments=attachments, template=template)


def add_deferred_mail(email, title, template_name, key, delta,
                      context_dict=None):
    now = timezone.now()
    schedule_time = now + delta
    template = EmailTemplate.objects.get(name=template_name)
    m = DeferredMail(
        template=template,
        context=context_dict,
        email=email,
        title=title,
        key=key,
        schedule_time=schedule_time
    )
    m.save()


def remove_deferred_mail(key):
    DeferredMail.remove_by(key)


@periodic_task(run_every=crontab(minute=10))
def send_deferred_mails():
    for mail in DeferredMail.objects.filter(schedule_time__lt=timezone.now()):
        html_content, text_content = mail.template.render(mail.context)
        async_select_and_send.delay(mail.email,
                                    mail.title,
                                    text_content,
                                    html_content)
        mail.delete()


@periodic_task(run_every=crontab(hour=0, minute=0))
def clear_daily_usages():
    providers = Provider.objects.filter(quota_type_is_daily=True)
    for p in providers:
        p.reset_usage()


@periodic_task(run_every=crontab(day_of_month=1, hour=0, minute=0))
def clear_monthly_usages():
    providers = Provider.objects.filter(quota_type_is_daily=False)
    for p in providers:
        p.reset_usage()
