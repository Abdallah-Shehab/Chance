from .models import Jop, Apply
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, filters
from rest_framework.response import Response
from django.http import Http404
from .serializers import JopSerializer , ApplicationsSerializer
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


# @api_view(['GET'])
# @permission_classes([AllowAny])
# def jop_detail_api(request , id):
#     jop_detail = Jop.objects.all().filter(id=id)
#     # serializer = JopSerializer(jop_detail)
#     return JsonResponse(jop_detail,safe=False)

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


# @permission_classes([IsAuthenticated])
# def add_jop(request):
#     if request.method == 'POST':
#         form = JopForm(request.POST , request.FILES)
#         if form.is_valid():
#             myform = form.save(commit=False)
#             myform.owner = request.user
#             myform.save()
#             return redirect(reverse('jops:jop_list'))
#     else:
#         form = JopForm()
#     return render(request , 'jop/add_jop.html' , {'form':form})

    # def post(self, request):
    #     serializer = GuestSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(
    #             serializer.data,
    #             status=status.HTTP_201_CREATED
    #         )
    #     return Response(
    #         serializer.data,
    #         status=status.HTTP_400_BAD_REQUEST
    #     )


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

        user = request.user

        # return JsonResponse(user, safe=False)
        jop = Jop(title=title, Description=Description, Salary=Salary,
                  place=city, Experiance=Experiance, Jop_Type=Jop_Type)
        jop.owner = user

        jop.save()

        return Response(
            status=status.HTTP_201_CREATED

        )
        # serializer = JopSerializer(data=request.data)
        # if jop.is_valid():
        #     jop.save()
        #     return Response(
        #         jop,
        #         status=status.HTTP_201_CREATED
        #     )
        # return Response(
        #            jop,
        #     status=status.HTTP_400_BAD_REQUEST
        # )


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


# @api_view(['PUT', 'DELETE'])
# @permission_classes([AllowAny])

# def EditcompanyPosts(request,id):
#     #   user=request.user
#     #   job=  Jop.objects.get(id=id)

#       if request.method == 'PUT':
#          data = request.data
#          salary = data['salary']
#          title = data['title']
#         #  gender = data['gender']
#         #  bio = data['bio']
#         #  nationality = data['nationality']
#          Jop.objects.all().filter(id=id).update(salary=salary, title=title)

#         #  profile.save()
#          return Response({'success': 'Profile  Updated successfully'})
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
            Apply.objects.create(jop=job, name=user)
            # Apply.jop_id = jobid
            return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Applications(request,id):
    jobid=id
    user = request.user
    apps = Apply.objects.all().filter(jop=jobid)
        # jops = Jop.objects.get(owner=userid)

    if request.method == 'GET':
        serializer = ApplicationsSerializer(apps, many=True)
        return Response(serializer.data)
    


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
