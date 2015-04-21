from celery import shared_task
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
from celery.schedules import crontab
from celery.task import periodic_task
from asyncmailer.models import Provider
import random


# do not use this function in the wild!
def async_render_and_send(email, title, context_dict=None, template='asyncmailer/email.html', template_plaintext='asyncmailer/email_pt.html'):
    if context_dict:
        rich_text = render_to_string(template, context_dict)
        plain_text = render_to_string(template_plaintext, context_dict)
    else:
        rich_text = render_to_string(template)
        plain_text = render_to_string(template_plaintext)

    providers = Provider.objects.all()
    good_providers = sorted([x for x in providers if x.can_send(email)], key=lambda x: x.can_send, reverse=True)
    top_providers = filter(lambda x: x.preference == good_providers[0].preference, good_providers)

    random.choice(top_providers).send(email, title, plain_text, html_message=rich_text)


@shared_task
def async_mail(email, title, context_dict=None, template='asyncmailer/email.html', template_plaintext='asyncmailer/email_pt.html'):
    if len(email) == 1:
        async_render_and_send(email[0], title, context_dict=context_dict, template=template, template_plaintext=template_plaintext)
    else:
        for address in email:
            async_render_and_send(address, title, context_dict=context_dict[address], template=template, template_plaintext=template_plaintext)


@periodic_task(run_every=crontab(hour=0))
def clear_daily_usages():
    providers = Provider.objects.fileter(quota_type_is_daily=True)
    for p in providers:
        p.reset_usage()


@periodic_task(run_every=crontab(day_of_month=1))
def clear_monthly_usages():
    providers = Provider.objects.fileter(quota_type_is_daily=False)
    for p in providers:
        p.reset_usage()
