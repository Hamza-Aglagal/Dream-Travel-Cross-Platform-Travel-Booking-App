# Generated by Django 5.0.3 on 2024-04-21 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardAPI', '0013_alter_destination_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='destination',
            name='images',
            field=models.TextField(blank=True, null=True),
        ),
    ]
