# Generated by Django 5.0.3 on 2024-04-21 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardAPI', '0011_alter_utilisateur_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='destination',
            name='images',
            field=models.ImageField(blank=True, null=True, upload_to='destination_images/'),
        ),
    ]