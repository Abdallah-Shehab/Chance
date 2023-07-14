from rest_framework import serializers
from .models import Jop, Apply, Comments


class JopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jop
        fields = '__all__'


class ApplicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apply
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'
