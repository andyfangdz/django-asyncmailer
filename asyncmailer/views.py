from django.http.response import HttpResponse
from django.http import HttpResponseForbidden

# asyncmailer/ index page
def index(request):
    if (request.user.is_authenticated() and request.user.is_active and request.user.is_superuser):
        return HttpResponse('admin')
    else:
        return HttpResponseForbidden()


"""Views for the asyncmailer app."""
# from django.views.generic import TemplateView

# from . import models


# class YourView(TemplateView):
#    template_name = 'asyncmailer/default.html'
