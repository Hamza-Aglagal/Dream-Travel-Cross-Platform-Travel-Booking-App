# Generated by Django 5.0.3 on 2024-04-21 13:42

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardAPI', '0006_utilisateur_last_login_alter_utilisateur_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='utilisateur',
            name='last_login',
        ),
        migrations.AlterField(
            model_name='utilisateur',
            name='email',
            field=models.CharField(max_length=30, validators=[django.core.validators.EmailValidator()]),
        ),
    ]
