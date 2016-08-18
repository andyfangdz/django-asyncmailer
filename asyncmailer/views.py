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
    try:
        template_path += [i for i in settings.TEMPLATE_DIRS]
    except:
        pass
    try:
        template_path += settings.TEMPLATES[0]['DIRS']
    except:
        pass
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


def get_form(request):
    template = request.POST.get('template', '')
    variation = request.POST.get('variation', '')
    locale = request.POST.get('locale', '')
    inline = request.POST.get('inline', '')
    subject = request.POST.get('subject', '')
    formats = request.POST.get('formats', '')
    payload = request.POST.get('payload', '{}')
    try:
        payload = json.loads(payload)
    except:
        if not formats == 'text':
            payload = {}
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
def get_json(request):
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
    template, variation, locale, inline, subject, formats, payload = get_form(
        request)
    if formats == 'text':
        res = payload
    else:
        res = render_to_string(
            template.replace('.html', '-templates/') + template, payload)
    return HttpResponse(res)


@staff_member_required
def presend(request):
    template, variation, locale, inline, subject, formats, payload = get_form(
        request)
    emails = request.POST.get('email', None)
    if emails:
        emails = [emails]
    else:
        emails = json.load(request.FILES['upload'])['email']
    if formats == 'text':
        for email in emails:
            async_select_and_send(email, subject, str(payload))
    else:
        for email in emails:
            async_mail(
                [email], subject, context_dict=payload,
                template=template.replace('.html', '-templates/') + template)
    return HttpResponse(json.dumps({'success': 'true'}))
