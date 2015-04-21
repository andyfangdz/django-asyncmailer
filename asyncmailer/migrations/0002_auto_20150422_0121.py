# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('asyncmailer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='provider',
            name='preference',
            field=models.IntegerField(default=0, verbose_name=b'Preference of the Server, Higher the Better'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='provider',
            name='quota',
            field=models.IntegerField(default=15000, verbose_name=b'Quota of the SMTP Server'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='provider',
            name='quota_type_is_daily',
            field=models.BooleanField(default=False, verbose_name=b'Is the quota of the server daily?'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='provider',
            name='usage',
            field=models.IntegerField(default=0, verbose_name=b'Usage of the SMTP Server'),
            preserve_default=True,
        ),
    ]
