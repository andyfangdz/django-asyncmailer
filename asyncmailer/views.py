from asyncmailer.tasks import async_mail
from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required
from django.http import HttpResponseBadRequest
from django.http.response import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
import json
import os
import re


def get_options():
    try:
        templatepath = settings.ASYNCMAILER_TEMPLATES_PATH
    except:
        templatepath = os.path.dirname(__file__) + '/templates/asyncmailer/'
    templates = []

    for dirname in os.listdir(templatepath):
        if (not os.path.isdir(templatepath + dirname)):
            continue
        else:
            new_template = {"dir": dirname, "html": "", "variations": []}
            for filename in os.listdir(templatepath + dirname):
                if (re.findall('\.html$', filename)):
                    new_template['html'] = filename
                elif (re.findall('\.json$', filename)):
                    new_template['variations'].append(filename)
                else:
                    pass
            templates.append(new_template)
    return templates


def get_form(request):
    try:
        template = request.POST.get('template', '')
        variation = request.POST.get('variation', '')
        locale = request.POST.get('locale', '')
        inline = request.POST.get('inline', '')
        formats = request.POST.get('format', '')
        payload = request.POST.get('payload', '{}')
        if (payload):
            payload = json.loads(payload)
        else:   # jsons
            payload = {}
        return (template, variation, locale, inline, formats, payload)
    except:
        return None


@staff_member_required
def index(request):
    templates = [i['html'] for i in get_options()]
    return render(request,
                  'asyncmailer/index.html',
                  {'templates': templates})


@staff_member_required
def get_variations(request):
    try:
        template = request.POST.get('template', '')
        for i in get_options():
            if (i['html'] == template):
                variations = i['variations']
                break
        return HttpResponse(' '.join(variations))
    except:
        return HttpResponseBadRequest()


@staff_member_required
def get_json(request):
    try:
        template = request.POST.get('template', '')
        variation = request.POST.get('variation', '')
        response = {}
        if (variation != 'base.json'):
            baseJson = render_to_string(
                'asyncmailer/' +
                template.replace('.html', '-templates/base.json'))
            response.update(json.loads(str(baseJson)))
        variationJSON = render_to_string(
            'asyncmailer/' +
            template.replace('.html', '-templates/') + variation)
        response.update(json.loads(str(variationJSON)))
        return HttpResponse(json.dumps(response))
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()


@staff_member_required
def retrieve(request):
    try:
        template, variation, locale, inline, formats, payload = get_form(
            request)
        return render(request, 'asyncmailer/' +
                      template.replace('.html', '-templates/') +
                      template, payload)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()


def get_dict_value(var, key):
    if (key in var):
        return var[key]
    else:
        return '<NULL>'


@staff_member_required
def presend(request):
    try:
        template, variation, locale, inline, formats, payload = get_form(
            request)
        email = request.POST.get('email', '')
        async_mail([email], "New Activity on Your Account",
                   context_dict={"message": "\"%s\"" %
                                 get_dict_value(payload, 'message'),
                                 "button_text":
                                 get_dict_value(payload, 'button_text'),
                                 "button_url": "%s" %
                                 get_dict_value(payload, 'button_url')},
                   template='asyncmailer/' +
                            template.replace('.html', '-templates/') +
                            template)
        return render(request, 'asyncmailer/index.html', payload)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()

"""Views for the asyncmailer app."""
# from django.views.generic import TemplateView

# from . import models


# class YourView(TemplateView):
#    template_name = 'asyncmailer/default.html'
