from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# from .serializers import UserSerializer

from .serializers import NoteSerializer , ProfileSerializer
from base.models import Note ,Profile
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['last_name'] = user.last_name
        token['first_name'] = user.first_name
        token['email'] = user.email
        token['superuser'] = user.is_superuser
        # ...

        return token
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)




class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        first_name =data['firstname']
        last_name=data['lastname']
        username = data['username']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                # if len(password) < 6:
                #     return Response({'error': 'Password must be at least 6 characters'})
                # else:
                    user = User.objects.create_user(
                        email=email, password=password, username=username,first_name=first_name,last_name=last_name)

                    user.save()
                    return Response({'success': 'User created successfully'})
        else:
            return Response({'error': 'Passwords do not match'})
 
        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProfile(request):
    # user = request.user
     # profile = Profile.objects.get(user=request.user)
    profile = Profile.objects.all().filter(user=request.user) 
    # profile = user.profile_set.all()
    serializer = ProfileSerializer(profile,many=True)
    return Response(serializer.data)



class UpdateProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    def post(self, request, format=None):
         
        
         data = self.request.data
         country = data['country']
        #  gender = data['gender']
        #  bio = data['bio']
         nationality = data['nationality']
         Profile.objects.all().filter(user=request.user).update(country=country ,nationality=nationality )
          
        #  profile.save()
         return Response({'success': 'Profile  Updated successfully'})


# def profile_edit(request):
#     profile = Profile.objects.get(user=request.user)
#     if request.method=='POST':
#         userform = UserForm(request.POST , instance=request.user)
#         profileform = ProfileForm(request.POST , request.FILES , instance=profile)
#         if userform.is_valid() and profileform.is_valid():
#             userform.save()
#             myprofile = profileform.save(commit=False)
#             myprofile.user = request.user
#             myprofile.save()
#             return redirect(reverse('accounts:profile'))
#     else:
#         userform = UserForm(instance=request.user)
#         profileform = ProfileForm(instance=profile)
#     return render(request , 'accounts/profile_edit.html' , {'userform':userform , 'profileform':profileform})








 