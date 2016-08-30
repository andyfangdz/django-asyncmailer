from asyncmailer.tasks import async_select_and_send
from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required
from django.http import JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from premailer import transform
import html2text
import json
import os
import re


def name_to_file(template_name, variation=None):
    if variation:
        return "%s-templates/%s.json" % (template_name, variation)
    return "%s-templates/%s.html" % (template_name, template_name)


def find_templates():
    template_path = []

    if hasattr(settings, "TEMPLATE_DIRS"):
        template_path += settings.TEMPLATE_DIRS

    if hasattr(settings, "TEMPLATES") and settings.TEMPLATES:
        template_path += settings.TEMPLATES[0]['DIRS']
    template_path += [os.path.dirname(__file__) + '/templates/']
    template_path = list(set(template_path))
    templates = {}
    for path in template_path:
        for dirname in os.listdir(path):
            if not os.path.isdir(path + dirname) or dirname == 'asyncmailer':
                continue
            else:
                template_name = ""
                new_template = {"dir": dirname, "html": "", "variations": []}
                for filename in os.listdir(os.path.join(path, dirname)):
                    if re.findall('\.html$', filename):
                        template_name = filename[:-5]  # Drop .html
                    elif re.findall('\.json$', filename):
                        new_template['variations'].append(filename[:-5])
                        # Drop .json
                    else:
                        pass
                templates[template_name] = new_template
    return templates


def get_request_content(request):
    template = request.POST.get('template', '')
    variation = request.POST.get('variation', '')
    locale = request.POST.get('locale', '')
    inline = request.POST.get('inline', '') == 'On'
    formats = request.POST.get('formats', '')
    payload = request.POST.get('payload', '{}')
    payload = json.loads(payload)
    return template, variation, locale, inline, formats, payload


@staff_member_required
def index(request):
    return render(request, 'asyncmailer/index.html', {
        'templates': find_templates().keys()
    })


@staff_member_required
def get_variations(request):
    template = request.POST.get('template', '')
    variations = find_templates()[template]["variations"]
    return JsonResponse({"variations": variations})


@staff_member_required
def get_metadata(request):
    template = request.POST.get('template', '')
    variation = request.POST.get('variation', '')
    response = {}
    if variation != 'base.json':
        base_json = render_to_string(
            name_to_file(template, variation="base")
        )
        response.update(json.loads(str(base_json)))
    variation_json = render_to_string(
        name_to_file(template, variation=variation)
    )
    response.update(json.loads(str(variation_json)))
    return JsonResponse(response)


@staff_member_required
def render_email(request):
    try:
        template, variation, locale, inline, formats, payload = \
            get_request_content(request)
    except:
        return JsonResponse({
            'success': False,
            'error': "Invalid JSON in payload."
        })

    try:
        rich_text = render_to_string(
            name_to_file(template), payload)
        plain_text = html2text.html2text(rich_text)
        if inline:
            rich_text = transform(rich_text)
        if formats == 'text':
            rich_text = None

    except:
        return JsonResponse({
            'success': False,
            'error': "Template render error."
        })
    return JsonResponse({
        'success': True,
        'content': rich_text or plain_text,
        'subject': payload["subject"],
        'plainText': formats == 'text'
    })


@staff_member_required
def send_test_mail(request):
    try:
        template, variation, locale, inline, formats, payload = \
            get_request_content(request)
    except ValueError:
        return JsonResponse({
            'success': False,
            'error': "Invalid JSON in payload."
        })
    try:
        emails = request.POST.get('email', None)
        if not emails:
            raise ValueError
        emails = [e.strip() for e in emails.split(',')]
    except:
        return JsonResponse({
            'success': False,
            'error': "Invalid email address."
        })

    try:
        rich_text = render_to_string(name_to_file(template), payload)
        plain_text = html2text.html2text(rich_text)
        if inline:
            rich_text = transform(rich_text)
        if formats == 'text':
            rich_text = None
    except:
        return JsonResponse({
            'success': False,
            'error': "Template render error."
        })

    try:
        for email in emails:
            async_select_and_send(email, payload["subject"], plain_text,
                                  rich_text=rich_text)
    except:
        return JsonResponse({
            'success': False,
            'error': "Cannot send email. Check Provider settings."
        })
    return JsonResponse({'success': True})
