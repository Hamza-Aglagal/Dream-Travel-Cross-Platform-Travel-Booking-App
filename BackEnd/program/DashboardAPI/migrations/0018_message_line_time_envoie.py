# Generated by Django 5.0.3 on 2024-04-28 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardAPI', '0017_remove_conversation_id_amis_conversation_destinatair_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='message_line',
            name='time_envoie',
            field=models.TimeField(null=True),
        ),
    ]