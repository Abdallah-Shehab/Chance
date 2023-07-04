# Generated by Django 4.0.1 on 2023-06-18 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0002_alter_jop_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jop',
            name='Description',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='jop',
            name='Experiance',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
        migrations.AlterField(
            model_name='jop',
            name='Jop_Type',
            field=models.CharField(blank=True, choices=[('Full Time', 'Full Time'), ('Part Time', 'Part Time')], max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='jop',
            name='Published_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='jop',
            name='Salary',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jop',
            name='Vacancy',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
        migrations.AlterField(
            model_name='jop',
            name='place',
            field=models.CharField(blank=True, choices=[('Menofia', 'Menofia'), ('Cairo', 'Cairo'), ('Giza', 'Giza'), ('Tanta', 'Tanta'), ('Mansora', 'Mansora'), ('Kafr Elshek', 'Kafr Elshek'), ('6 Octper', '6 Octper')], max_length=20, null=True),
        ),
    ]
