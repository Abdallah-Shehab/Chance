from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User
import datetime
from django.utils import timezone

# Create your models here.

JOP_TYPE = (
    ('Full Time', 'Full Time'),
    ('Part Time', 'Part Time'),
)
JOP_PLACE = (
    ('Menofia', 'Menofia'),
    ('Cairo', 'Cairo'),
    ('Giza', 'Giza'),
    ('Tanta', 'Tanta'),
    ('Mansora', 'Mansora'),
    ('Kafr Elshek', 'Kafr Elshek'),
    ('6 Octper', '6 Octper'),
)


class Jop(models.Model):
    owner = models.ForeignKey(
        User, related_name='jop_owner', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    place = models.CharField(
        choices=JOP_PLACE, max_length=20, null=True, blank=True)
    Jop_Type = models.CharField(
        choices=JOP_TYPE, max_length=15, null=True, blank=True)
    Description = models.TextField(max_length=1000, null=True, blank=True)
    Published_at = models.DateTimeField(
        default=datetime.datetime.now(), blank=True, null=True)
    Vacancy = models.IntegerField(default=1, null=True, blank=True)
    Salary = models.IntegerField(default=0, null=True, blank=True)
    Experiance = models.IntegerField(default=1, null=True, blank=True)
    # Category = models.ForeignKey('Category' , on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='job/', default='blank-profile-picture.png', null=True, blank=True)
    slug = models.SlugField(null=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Jop, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Apply(models.Model):
    jop = models.ForeignKey(
        Jop, related_name='apply_jop', on_delete=models.CASCADE)
    name = models.ForeignKey(User, null=True,
                             related_name='user_apply_jop', on_delete=models.CASCADE)
    # cover_letter = models.TextField(max_length=500)
    creted_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name)
