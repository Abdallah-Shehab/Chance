from django.urls import path
from . import views

urlpatterns = [
    path('', views.getJobs),
    path('<int:id>', views.jop_detail_api, name='jop_detail_api'),
    path('addNewjob', views.add_jop.as_view(),),
    path('companyposts', views.companyPosts,),
    path('companyposts/apply', views.ApplyForJob.as_view(),),
    path('companyposts/edit/<int:id>', views.EditcompanyPosts.as_view(),),

]
