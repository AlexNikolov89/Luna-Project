# Generated by Django 3.1.2 on 2020-10-28 20:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='restaurantreview',
            old_name='restaurant_review',
            new_name='restaurant_reviewed',
        ),
    ]
