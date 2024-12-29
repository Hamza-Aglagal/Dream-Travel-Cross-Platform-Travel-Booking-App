# Generated by Django 5.0.3 on 2024-04-28 15:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardAPI', '0019_alter_offre_destinations_alter_offre_evenements_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ligne_activite',
            name='date_debut',
        ),
        migrations.RemoveField(
            model_name='ligne_activite',
            name='date_fin',
        ),
        migrations.RemoveField(
            model_name='ligne_activite',
            name='description',
        ),
        migrations.RemoveField(
            model_name='ligne_activite',
            name='prix',
        ),
        migrations.AddField(
            model_name='activite',
            name='id_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='activites_user', to='DashboardAPI.utilisateur'),
        ),
        migrations.AddField(
            model_name='ligne_activite',
            name='id_Activite',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='DashboardAPI.activite'),
        ),
    ]
