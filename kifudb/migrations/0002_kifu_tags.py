# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-02-04 11:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kifudb', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='kifu',
            name='tags',
            field=models.ManyToManyField(blank=True, to='kifudb.KifuTag'),
        ),
    ]
