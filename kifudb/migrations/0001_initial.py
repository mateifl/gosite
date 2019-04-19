# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-02-04 09:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Kifu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game_text', models.TextField()),
                ('game_date', models.DateField(blank=True, null=True)),
                ('place', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('one_line_description', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'verbose_name': 'Game',
                'verbose_name_plural': 'Games',
            },
        ),
        migrations.CreateModel(
            name='KifuDiagram',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diagram_title', models.CharField(max_length=256)),
                ('diagram', models.ImageField(upload_to='uploads/')),
                ('diagram_text', models.TextField()),
            ],
            options={
                'verbose_name': 'Diagram',
                'verbose_name_plural': 'Diagrams',
            },
        ),
        migrations.CreateModel(
            name='KifuGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('slug', models.SlugField(blank=True, max_length=255)),
            ],
            options={
                'verbose_name': 'Group',
                'verbose_name_plural': 'Groups',
            },
        ),
        migrations.CreateModel(
            name='KifuTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'Tag',
                'verbose_name_plural': 'Tags',
            },
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=255, null=True)),
                ('last_name', models.CharField(max_length=255)),
                ('middle_name', models.CharField(blank=True, max_length=255, null=True)),
                ('rank', models.CharField(blank=True, max_length=5, null=True)),
                ('birth_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Player',
                'verbose_name_plural': 'Players',
            },
        ),
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position_text', models.TextField()),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kifudb.Kifu')),
            ],
        ),
        migrations.AddField(
            model_name='kifu',
            name='black_player',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='black', to='kifudb.Player'),
        ),
        migrations.AddField(
            model_name='kifu',
            name='groups',
            field=models.ManyToManyField(blank=True, to='kifudb.KifuGroup'),
        ),
        migrations.AddField(
            model_name='kifu',
            name='white_player',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='white', to='kifudb.Player'),
        ),
    ]
