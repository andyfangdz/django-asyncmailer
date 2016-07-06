from django.http.response import HttpResponse
from django.contrib.admin.views.decorators import staff_member_required


@staff_member_required
def index(request):
    return HttpResponse('')


"""Views for the asyncmailer app."""
# from django.views.generic import TemplateView

# from . import models


# class YourView(TemplateView):
#    template_name = 'asyncmailer/default.html'
