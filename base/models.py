
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser

# Create your models here.


# class User(AbstractBaseUser, PermissionsMixin):

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []

#     def get_full_name(self):
#         '''
#         Returns the first_name plus the last_name, with a space in between.
#         '''
#         full_name = '%s %s' % (self.first_name, self.last_name)
#         return full_name.strip()

#     def get_short_name(self):
#         '''
#         Returns the short name for the user.
#         '''
#         return self.first_name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    bio = models.CharField(max_length=1000, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    image = models.ImageField(upload_to='profile/', null=True, blank=True)
    expyears = models.CharField(max_length=100, null=True, blank=True)

    cv = models.FileField(upload_to='cvProfile/',
                          )
    githublink = models.URLField(
        max_length=150,  null=True, db_index=True)
    linkedinlink = models.URLField(
        max_length=150,  null=True, db_index=True)
    nationality = models.CharField(max_length=100, null=True, blank=True)
    birthday = models.DateField(auto_now=False, blank=True, null=True)
    gender = models.CharField(max_length=50, null=True, blank=True)
    typejob = models.CharField(max_length=100, null=True, blank=True)
    categories = models.CharField(max_length=100, null=True, blank=True)
    salary = models.IntegerField(default=4000)

    edulevel = models.CharField(max_length=100, null=True, blank=True)
    faculty = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    graduationyear = models.CharField(max_length=100, null=True, blank=True)
    languages = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.user.username)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()
