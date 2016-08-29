from asyncmailer.tasks import async_mail, async_select_and_send
from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required
from django.http.response import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
import json
import os
import re


def get_options():
    template_path = []

    if hasattr(settings, "TEMPLATE_DIR"):
        template_path += settings.TEMPLATE_DIRS

    if hasattr(settings, "TEMPLATES") and settings.TEMPLATES:
        template_path += settings.TEMPLATES[0]['DIRS']
    template_path += [os.path.dirname(__file__) + '/templates/']
    template_path = list(set(template_path))
    templates = []
    for path in template_path:
        for dirname in os.listdir(path):
            if not os.path.isdir(path + dirname) or dirname == 'asyncmailer':
                continue
            else:
                new_template = {"dir": dirname, "html": "", "variations": []}
                for filename in os.listdir(path + dirname):
                    if re.findall('\.html$', filename):
                        new_template['html'] = filename
                    elif re.findall('\.json$', filename):
                        new_template['variations'].append(filename)
                    else:
                        pass
                templates.append(new_template)
    return templates


def get_request_content(request):
    template = request.POST.get('template', '')
    variation = request.POST.get('variation', '')
    locale = request.POST.get('locale', '')
    inline = request.POST.get('inline', '')
    subject = request.POST.get('subject', '')
    formats = request.POST.get('formats', '')
    payload = request.POST.get('payload', '{}')
    payload = json.loads(payload)
    return template, variation, locale, inline, subject, formats, payload


@staff_member_required
def index(request):
    templates = [i['html'] for i in get_options()]
    return render(request, 'asyncmailer/index.html', {'templates': templates})


@staff_member_required
def get_variations(request):
    template = request.POST.get('template', '')
    for i in get_options():
        if i['html'] == template:
            variations = i['variations']
            break
    return HttpResponse(' '.join(variations))


@staff_member_required
def get_metadata(request):
    template = request.POST.get('template', '')
    variation = request.POST.get('variation', '')
    response = {}
    if variation != 'base.json':
        base_json = render_to_string(
            template.replace('.html', '-templates/base.json'))
        response.update(json.loads(str(base_json)))
    variation_json = render_to_string(
        template.replace('.html', '-templates/') + variation)
    response.update(json.loads(str(variation_json)))
    return HttpResponse(json.dumps(response))


@staff_member_required
def retrieve(request):
    try:
        template, variation, locale, inline, subject, formats, payload = \
            get_request_content(request)
    except:
        return HttpResponse(json.dumps({
            'success': False,
            'error': "Invalid JSON in payload."
        }))

    try:
        if formats == 'text':
            res = payload
        else:
            res = render_to_string(
                template.replace('.html', '-templates/') + template, payload)
    except:
        return HttpResponse(json.dumps({
            'success': False,
            'error': "Template render error."
        }))
    return HttpResponse(json.dumps({'success': True, 'content': res}))


@staff_member_required
def presend(request):
    try:
        template, variation, locale, inline, subject, formats, payload = \
            get_request_content(request)
    except ValueError:
        return HttpResponse(json.dumps({
            'success': False,
            'error': "Invalid JSON in payload."
        }))
    emails = request.POST.get('email', None)
    try:
        if emails:
            emails = [emails]
        else:
            emails = json.load(request.FILES['upload'])['email']
    except:
        return HttpResponse(json.dumps({
            'success': False,
            'error': "Invalid email address."
        }))

    try:
        if formats == 'text':
            for email in emails:
                async_select_and_send(email, subject, str(payload))
        else:
            for email in emails:
                async_mail(
                    [email], subject, context_dict=payload,
                    template=template.replace('.html',
                                              '-templates/') + template)
    except:
        return HttpResponse(json.dumps({
            'success': False,
            'error': "Cannot send email. Check Provider settings."
        }))
    return HttpResponse(json.dumps({'success': True}))
