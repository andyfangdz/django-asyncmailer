"""URLs for the asyncmailer app."""
from compat import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^index$', views.index),
    url(r'^get_variations$', views.get_variations),
    url(r'^get_metadata$', views.get_metadata),
    url(r'^render_email$', views.render_email),
    url(r'^send_test_mail$', views.send_test_mail),
    # append your urls here
]
