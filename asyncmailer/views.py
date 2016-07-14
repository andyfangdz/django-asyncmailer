from django.http.response import HttpResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.views.decorators.http import require_http_methods
from asyncmailer.models import  EmailTemplate
from django.conf import settings
from django.http import HttpResponseBadRequest
import re
import os


def getOptions():
    try:
        templatepath = settings.ASYNCMAILER_TEMPLATES_PATH
    except Exception as e:
        templatepath = os.path.dirname(__file__) + '/templates/asyncmailer/'
    # os.path.join(os.path.dirname(__file__) + '/templates/asyncmailer/')
    templates = []

    for dirname in os.listdir(templatepath):
        if (not os.path.isdir(templatepath + dirname)):
            continue
        else:
            newTemplate = {"dir":dirname, "html":"", "variations":[]}
            for filename in os.listdir(templatepath + dirname):
                if (re.findall('\.html$', filename)):
                    newTemplate['html'] = filename
                elif (re.findall('\.json$', filename)):
                    newTemplate['variations'].append(filename)
                else:
                    pass
            templates.append(newTemplate)
    return templates


@staff_member_required
def index(request):
    templates = [i['html'] for i in getOptions()]
    return render_to_response('asyncmailer/index.html',{'templates':templates}, context_instance = RequestContext(request))

@staff_member_required
def getVariations(request):
    try:
        template = request.POST.get('template', '')
        for i in getOptions():
            if (i['html'] == template):
                variations = i['variations']
                break
        return HttpResponse(' '.join(variations))
    except Exception as e:
        return HttpResponseBadRequest()

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
    except Exception as e:
        return None

@staff_member_required
def retrieve(request):
    try:
        template, variation, locale, inline, formats, payload = getform(request)
        return render_to_response('asyncmailer/' + template.replace('.html', '-templates/') + template, payload, context_instance = RequestContext(request))
    except Exception as e:
        return HttpResponseBadRequest()

def getDictValue(var, key):
    if (var.has_key(key)):
        return var[key]
    else:
        return '<NULL>'

@staff_member_required
def presend(request):
    # try:
    template, variation, locale, inline, formats, payload = getform(request)
    email = request.POST.get('email', '')

    from asyncmailer.tasks import async_mail
    async_mail([email],
      "New Activity on Your Account",
      context_dict={
      "message": "Hello! \n Someone gave you a comment today! \n \"%s\"" % getDictValue(payload, 'message'),
      "button_text": getDictValue(payload, 'button_text'),
      "button_url": "http://www.example.com/login/?token=%s&next=/notifications/" % getDictValue(payload, 'button_url')
      },
      template='asyncmailer/' + template.replace('.html', '-templates/') + template,
    )
    return render_to_response('asyncmailer/index.html', payload, context_instance = RequestContext(request))
    # except Exception as e:
    #     return HttpResponseBadRequest()

"""Views for the asyncmailer app."""
# from django.views.generic import TemplateView

# from . import models


# class YourView(TemplateView):
#    template_name = 'asyncmailer/default.html'
