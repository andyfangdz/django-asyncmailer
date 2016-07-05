"""Admin classes for the asyncmailer app."""
# from django.contrib import admin

# from . import models


# class YourModelAdmin(admin.ModelAdmin):
#    list_display = ['some', 'fields', ]
#    search_fields = ['some', 'fieds', ]

# admin.site.register(models.YourModel, YourModelAdmin)

from django.contrib import admin
from asyncmailer.models import Provider, EmailTemplate, DeferredMail

# Register your models here.
admin.site.register(Provider)
admin.site.register(EmailTemplate)
admin.site.register(DeferredMail)
