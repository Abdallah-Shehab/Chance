from rest_framework.serializers import ModelSerializer
# from rest_auth.serializers import UserDetailsSerializer

from base.models import Note, Profile
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class ProfileSerializer(ModelSerializer):
    # user = serializers.Field(source='user.username')

    class Meta:
        model = Profile
        fields = '__all__'
        extra_kwargs = {'user': {'required': False}}


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
