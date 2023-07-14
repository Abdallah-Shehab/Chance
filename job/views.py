from .models import Jop, Apply, User, Comments
from base.models import Profile
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, filters
from rest_framework.response import Response
from django.http import Http404, HttpResponse
from .serializers import JopSerializer, ApplicationsSerializer, CommentSerializer
import json
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import permissions
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def getJobs(request):

    jobs = Jop.objects.all()
    serializer = JopSerializer(jobs, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def jop_detail_api(request, id):
    try:
        job = Jop.objects.get(id=id)
    except Jop.DoesNotExists:
        return Response(status=status.HTTP_404_NOT_FOUND)
    # GET
    if request.method == 'GET':
        serializer = JopSerializer(job)
        return Response(serializer.data)


class add_jop(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        data = self.request.data
        title = data['title']
        Description = data['Description']
        Jop_Type = data['Jop_Type']
        Experiance = data['Experiance']
        Salary = data['Salary']
        city = data['place']
        # image = data['image']

        user = request.user
        profile = Profile.objects.get(user=user)
        # return JsonResponse(user, safe=False)
        job = Jop.objects.create(title=title, Description=Description, Salary=Salary,
                                 place=city, Experiance=Experiance, Jop_Type=Jop_Type, owner=user, username=user.username, image=profile.image)

        job.save()

        return Response(
            status=status.HTTP_201_CREATED

        )


@api_view(['GET'])
@permission_classes([AllowAny])
def companyPosts(request):
    try:
        user = request.user
        jops = Jop.objects.all().filter(owner=user.id)
        # jops = Jop.objects.get(owner=userid)

    except Jop.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = JopSerializer(jops, many=True)
        return Response(serializer.data)


class ApplyForJob(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        data = self.request.data
        user = request.user
        jobid = data['jobid']
        job = Jop.objects.get(id=jobid)
        # try:
        #     AlreadyApplied = Apply.objects.get(name=user.id, jop=jobid)
        # except (Apply.DoesNotExist):
        #     Apply.objects.create(jop=job, name=user)
        #     # Apply.jop_id = jobid
        #     return Response(status=status.HTTP_200_OK)
        AlreadyApplied = Apply.objects.filter(name=user.id, jop=jobid).exists()

        if AlreadyApplied:
            return Response(status=status.HTTP_226_IM_USED)

        else:
            print(job.title, user.username, job.username)
            Apply.objects.create(jop=job, name=user, job_title=job.title,
                                 made_by=user.username, job_owner=job.username)
            # Apply.jop_id = jobid
            return Response(status=status.HTTP_200_OK)


class SaveChanges(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def put(self, request):
        data = request.data
        print(data)
        made_by = data["made_by"]
        appstatus = data["status"]
        if (appstatus != ''):

            Apply.objects.filter(made_by=made_by).update(status=appstatus)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_200_OK)


class makeComment(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        data = self.request.data
        comment = data["comment"]
        user = request.user
        # serializer = CommentSerializer()
        try:

            Comments.objects.create(
                user=user, comment=comment, username=user.username)
            return Response(status=status.HTTP_200_OK)

        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def getComments(request):
    comm = Comments.objects.all()
    serlizer = CommentSerializer(comm, many=True)
    return Response(serlizer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Applications(request, id):
    jobid = id

    apps = Apply.objects.all().filter(jop=jobid)

    if request.method == 'GET':
        serializer = ApplicationsSerializer(apps, many=True)

        # serializer = ApplicationsSerializer(apps, many=True)
        # print(job[0]["title"])
        # return JsonResponse(list(data.values()), safe=False)
        # return Response({"job": job[0]["title"],
        #                  "users": users[0]["username"], "app": apps[0]["creted_at"]},
        #                 status=status.HTTP_200_OK)
        return Response(serializer.data,
                        status=status.HTTP_200_OK)
        # return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userApplications(request):
    # jobid=id
    user = request.user
    apps = Apply.objects.all().filter(name=user)
    # jops = Jop.objects.get(owner=userid)

    if request.method == 'GET':
        serializer = ApplicationsSerializer(apps, many=True)
        return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteApplication(request, id):
    ApplicationId = id
    user = request.user
    apps = Apply.objects.all().filter(id=ApplicationId).delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    # jops = Jop.objects.get(owner=userid)


class EditcompanyPosts(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request, id):

        data = request.data
        salary = data['salary']
        title = data['title']
        #  gender = data['gender']
        #  bio = data['bio']
        #  nationality = data['nationality']
        Jop.objects.all().filter(id=id).update(title=title, Salary=salary)

        #  profile.save()
        return Response({'success': 'Profile  Updated successfully'})

    def delete(self, request, id):
        Jop.objects.all().filter(id=id).delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
