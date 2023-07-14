from base.models import Note, Profile
from .serializers import NoteSerializer, ProfileSerializer, UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework import status, filters
from django.contrib.auth.models import Group, User
from rest_framework import generics
from django.http import Http404
# from django.contrib.auth import get_user_model

# User = get_user_model()

# from .serializers import UserSerializer


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
        token['staff'] = user.is_staff
        # token['profile'] = user.profile
        token['full_name'] = user.first_name + ' ' + user.last_name
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def getUsers(request):
    users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def getProfiles(request):
    profiles = Profile.objects.all()

    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data)


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        # first_name = data['firstname']
        # last_name = data['lastname']
        username = data['username']
        email = data['email']
        password = data['password']
        password2 = data['password2']
        # is_company = data['company']
        is_company = data.get('company', 0)

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                # if len(password) < 6:
                #     return Response({'error': 'Password must be at least 6 characters'})
                # else:
                user = User.objects.create_user(
                    email=email, password=password, username=username,)
                if is_company:
                    company_group, created, = Group.objects.get_or_create(
                        name='Company')
                    user.groups.add(company_group)
                    user.save()
#  first_name=first_name, last_name=last_name

                return Response({'success': 'User created successfully'})
        else:
            return Response({'error': 'Passwords do not match'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProfile(request, pk):
    user_object = User.objects.get(username=pk)
    profile = Profile.objects.all().filter(user=user_object)
    # user = request.user
    # profile = Profile.objects.get(user=request.user)
    # profile = Profile.objects.all().filter(user=request.user)
    # profile = user.profile_set.all()
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)


class UpdateProfileView(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def put(self, request, pk):
        data = request.data

        user = request.user
        user_object = User.objects.get(username=pk)
        profile = Profile.objects.get(user=user_object)
        print(user_object)
        serializer = ProfileSerializer(profile, data=data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        else:
            print(serializer.data)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # , status=status.HTTP_400_BAD_REQUEST

    # def put(self, request, format=None):
    #     data = self.request.data
    #     image = request.FILES.get("image")
    #     print(data)
    #     # image = data['image']
    #     country = data['country']
    #     first_name = data['first_name']
    #     last_name = data['last_name']
    #     faculty = data['faculty']
    #     edulevel = data['edulevel']
    #     graduationyear = data['graduationyear']

    #     phone_number = data['phone_number']
    #     birthday = data['birthday']
    #     bio = data['bio']
    #     nationality = data['nationality']
    #     # User.objects.all().filter(id=request.user.id).update(
    #     #     first_name=first_name, last_name=last_name)
    #     Profile.objects.all().filter(user=request.user).update(
    #         first_name=first_name, last_name=last_name,
    #         country=country, nationality=nationality, phone_number=phone_number, birthday=birthday, bio=bio, faculty=faculty,
    #         edulevel=edulevel, graduationyear=graduationyear, image=image
    #     )

    #     #  profile.save()
    #     return Response({'success': 'Profile  Updated successfully'})


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
