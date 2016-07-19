from asyncmailer.tasks import async_mail
from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required
from django.http import HttpResponseBadRequest
from django.http.response import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
import os
import re


def getOptions():
    try:
        templatepath = settings.ASYNCMAILER_TEMPLATES_PATH
    except:
        templatepath = os.path.dirname(__file__) + '/templates/asyncmailer/'
    templates = []

    for dirname in os.listdir(templatepath):
        if (not os.path.isdir(templatepath + dirname)):
            continue
        else:
            newTemplate = {"dir": dirname, "html": "", "variations": []}
            for filename in os.listdir(templatepath + dirname):
                if (re.findall('\.html$', filename)):
                    newTemplate['html'] = filename
                elif (re.findall('\.json$', filename)):
                    newTemplate['variations'].append(filename)
                else:
                    pass
            templates.append(newTemplate)
    return templates


def getform(request):
    try:
        template = request.POST.get('template', '')
        variation = request.POST.get('variation', '')
        locale = request.POST.get('locale', '')
        inline = request.POST.get('inline', '')
        formats = request.POST.get('format', '')
        payload = request.POST.get('payload', '{}')
        if (payload):
            payload = eval(payload)
        else:   # jsons
            payload = {}
        return (template, variation, locale, inline, formats, payload)
    except:
        return None


@staff_member_required
def index(request):
    templates = [i['html'] for i in getOptions()]
    return render(request,
                  'asyncmailer/index.html',
                  {'templates': templates})


@staff_member_required
def getVariations(request):
    try:
        template = request.POST.get('template', '')
        for i in getOptions():
            if (i['html'] == template):
                variations = i['variations']
                break
        return HttpResponse(' '.join(variations))
    except:
        return HttpResponseBadRequest()


@staff_member_required
def getJSON(request):
    try:
        template = request.POST.get('template', '')
        variation = request.POST.get('variation', '')
        response = {}
        if (variation != 'base.json'):
            baseJson = render_to_string(
                'asyncmailer/' +
                template.replace(
                    '.html',
                    '-templates/base.json'))
            response.update(eval(str(baseJson)))

        variationJSON = render_to_string(
            'asyncmailer/' +
            template.replace(
                '.html',
                '-templates/') +
            variation)
        response.update(eval(str(variationJSON)))
        return HttpResponse(str(response))
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()


@staff_member_required
def retrieve(request):
    try:
        template, variation, locale, inline, formats, payload = getform(
            request)
        return render(request,
                      'asyncmailer/' +
                      template.replace(
                          '.html',
                          '-templates/') +
                      template,
                      payload)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()


def getDictValue(var, key):
    if (key in var):
        return var[key]
    else:
        return '<NULL>'


@staff_member_required
def presend(request):
    try:
        template, variation, locale, inline, formats, payload = getform(
            request)
        email = request.POST.get('email', '')
        async_mail(
            [email],
            "New Activity on Your Account",
            context_dict={
                "message": "Hello!  \n \"%s\"" %
                getDictValue(
                    payload,
                    'message'),
                "button_text": getDictValue(
                    payload,
                    'button_text'),
                "button_url": "http://?token=%s&next=/notifications/" %
                getDictValue(
                    payload,
                    'button_url')},
            template='asyncmailer/' +
            template.replace(
                '.html',
                '-templates/') +
            template)
        return render(request, 'asyncmailer/index.html',
                      payload)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()

"""Views for the asyncmailer app."""
# from django.views.generic import TemplateView

# from . import models


# class YourView(TemplateView):
#    template_name = 'asyncmailer/default.html'
