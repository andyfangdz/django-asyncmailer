"""URLs to run the tests."""
from compat import include, url
from django.contrib import admin
import asyncmailer.urls


admin.autodiscover()

urlpatterns = [
    url(r'^asyncmailer/', include(asyncmailer.urls)),
    url(r'^admin/', include(admin.site.urls)),
]
