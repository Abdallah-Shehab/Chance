# Generated by Django 4.1.7 on 2023-07-08 14:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_profile_bio_alter_profile_categories_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='graduationyear',
            new_name='educationallevel',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='leveleducation',
            new_name='gradYear',
        ),
    ]