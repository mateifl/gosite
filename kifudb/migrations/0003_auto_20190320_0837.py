# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2019-03-20 08:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kifudb', '0002_kifu_tags'),
    ]

    operations = [
        migrations.RenameField(
            model_name='player',
            old_name='last_name',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='player',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='player',
            name='middle_name',
        ),
    ]
