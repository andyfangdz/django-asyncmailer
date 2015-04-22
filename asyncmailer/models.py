from django.db import models
from django.core.mail import get_connection, send_mail
from jsonfield import JSONField
import re

# Create your models here.

class Provider(models.Model):

    enabled = models.BooleanField(verbose_name="If this provider is enabled", default=True)
    smtp_host = models.CharField(verbose_name="Host of SMTP Server", max_length=255)
    smtp_port = models.IntegerField(verbose_name="Port of SMTP Server", default=587)
    smtp_username = models.CharField(verbose_name="User Name of SMTP Server", max_length=255)
    smtp_password = models.CharField(verbose_name="Password of SMTP Server", max_length=255)
    use_tls = models.BooleanField(verbose_name="If the server uses TLS", default=False)

    from_address = models.CharField(verbose_name="From address for this SMTP Server", max_length=255)

    blacklist = JSONField(verbose_name="Never send emails to these domains with this provider. e.g., @msn.com", blank=True)

    quota = models.IntegerField(verbose_name="Quota of the SMTP Server", default=15000)
    usage = models.IntegerField(verbose_name="Usage of the SMTP Server", default=0)
    quota_type_is_daily = models.BooleanField(verbose_name="Is the quota of the server daily?", default=False)

    preference = models.IntegerField(verbose_name="Preference of the Server, Higher the Better", default=0)

    def reset_usage(self):
        self.usage = 0
        self.save()

    def add_usage(self):
        self.usage += 1
        self.save()

    def within_quota(self):
        if not self.quota:
            return True
        return self.usage < self.quota

    def __str__(self):
        return self.smtp_host

    def __unicode__(self):
        return self.__str__()

    def get_conection(self):
        return get_connection(host=self.smtp_host,
                              port=self.smtp_port,
                              username=self.smtp_username,
                              password=self.smtp_password,
                              use_tls=self.use_tls)

    def send(self, address, title, content, html_message=None):
        send_mail(title, content, self.from_address, [address], html_message=html_message, connection=self.get_conection(), fail_silently=False)
        self.add_usage()

    def can_send(self, address):
        if not self.enabled:
            return False
        if not self.within_quota():
            return False
        suffix = re.search("@[\w.]+", address).group()
        if suffix in self.blacklist:
            return False
        return True




