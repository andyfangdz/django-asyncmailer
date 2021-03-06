# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-13 21:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('asyncmailer', '0003_auto_20160817_0107'),
    ]

    operations = [
        migrations.AddField(
            model_name='deferredmail',
            name='local_template',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='deferredmail',
            name='template',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='asyncmailer.EmailTemplate'),
        ),
    ]
