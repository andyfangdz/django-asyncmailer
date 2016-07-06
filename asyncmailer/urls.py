"""URLs for the asyncmailer app."""
from compat import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    #your urls append here
]
