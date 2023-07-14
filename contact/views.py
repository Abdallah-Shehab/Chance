from django.conf import settings
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, filters


@api_view(['POST'])
@permission_classes([AllowAny])
def send_message(request):
    try:
        if request.method == 'POST':
            data = request.data
            subject = data['subject']
            email = data['email']
            message = data['message']
            send_mail(
                subject,
                message, email,
                settings.EMAIL_HOST_USER,

            )
    except:

        return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_200_OK)
