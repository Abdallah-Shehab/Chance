 
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    bio = models.CharField(max_length=1000,null=True , blank=True)
    country = models.CharField( max_length=100,null=True , blank=True)
    city = models.CharField(max_length=50,null=True , blank=True)
    phone_number = models.CharField(max_length=15,null=True , blank=True)
    image = models.ImageField(upload_to='profile/' , default='blank-profile-picture.png' , null=True , blank=True)
    experiance1 = models.CharField( max_length=100,null=True , blank=True)
    experiance2 = models.CharField( max_length=100,null=True , blank=True)
    cv = models.FileField(upload_to='cvProfile/',default='Course_Certificate_En_Database_Fundamentals.pdf' )
    githublink = models.URLField(max_length=150 , unique=True , null=True , db_index=True)
    linkedinlink = models.URLField(max_length=150 , unique=True , null=True , db_index=True)
    nationality = models.CharField( max_length=100,null=True , blank=True)
    birthday = models.DateField(auto_now=False , blank=True , null=True)
    gender = models.CharField( max_length=50,null=True , blank=True)
    typejop = models.CharField( max_length=100,null=True , blank=True)
    categories = models.CharField( max_length=100,null=True , blank=True)
    salary = models.IntegerField(default=4000)
    experianceyears = models.CharField( max_length=50,null=True , blank=True)
    leveleducation = models.CharField( max_length=100,null=True , blank=True)
    faculty = models.CharField( max_length=100,null=True , blank=True)
    department = models.CharField( max_length=100,null=True , blank=True)
    graduationyear = models.CharField( max_length=100,null=True , blank=True)
    languages = models.CharField( max_length=100,null=True , blank=True)
    def __str__(self):
        return str(self.user)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

    
    
     
class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()