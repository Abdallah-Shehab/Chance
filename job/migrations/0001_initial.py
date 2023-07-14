# Generated by Django 4.0.1 on 2023-07-12 20:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Jop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('username', models.CharField(blank=True, max_length=100, null=True)),
                ('place', models.CharField(blank=True, choices=[('Menofia', 'Menofia'), ('Cairo', 'Cairo'), ('Giza', 'Giza'), ('Tanta', 'Tanta'), ('Mansora', 'Mansora'), ('Kafr Elshek', 'Kafr Elshek'), ('6 Octper', '6 Octper')], max_length=20, null=True)),
                ('Jop_Type', models.CharField(blank=True, choices=[('Full Time', 'Full Time'), ('Part Time', 'Part Time')], max_length=15, null=True)),
                ('Description', models.TextField(blank=True, max_length=1000, null=True)),
                ('Published_at', models.DateTimeField(auto_now=True, null=True)),
                ('Vacancy', models.IntegerField(blank=True, default=1, null=True)),
                ('Salary', models.IntegerField(blank=True, default=0, null=True)),
                ('Experiance', models.IntegerField(blank=True, default=1, null=True)),
                ('image', models.ImageField(blank=True, default=1, null=True, upload_to='job/')),
                ('slug', models.SlugField(blank=True, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jop_owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now=True, null=True)),
                ('comment', models.TextField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Apply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creted_at', models.DateTimeField(auto_now=True)),
                ('jop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='apply_jop', to='job.jop')),
                ('name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_apply_jop', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]