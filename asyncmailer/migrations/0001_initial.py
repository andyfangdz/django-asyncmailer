# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Provider',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('enabled', models.BooleanField(default=True, verbose_name=b'If this provider is enabled')),
                ('smtp_host', models.CharField(max_length=255, verbose_name=b'Host of SMTP Server')),
                ('smtp_port', models.IntegerField(default=587, verbose_name=b'Port of SMTP Server')),
                ('smtp_username', models.CharField(max_length=255, verbose_name=b'User Name of SMTP Server')),
                ('smtp_password', models.CharField(max_length=255, verbose_name=b'Password of SMTP Server')),
                ('use_tls', models.BooleanField(default=False, verbose_name=b'If the server uses TLS')),
                ('from_address', models.CharField(max_length=255, verbose_name=b'From address for this SMTP Server')),
                ('blacklist', jsonfield.fields.JSONField(verbose_name=b'Never send emails to these domains with this provider. e.g., @msn.com', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
