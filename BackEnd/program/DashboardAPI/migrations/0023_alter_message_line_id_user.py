# Generated by Django 5.0.3 on 2024-05-02 14:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardAPI', '0022_conversation_type_conversation_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message_line',
            name='id_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='DashboardAPI.utilisateur'),
        ),
    ]
