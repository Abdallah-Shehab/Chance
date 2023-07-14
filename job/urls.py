from django.urls import path
from . import views

urlpatterns = [
    path('', views.getJobs),
    path('<int:id>', views.jop_detail_api, name='jop_detail_api'),
    path('addNewjob', views.add_jop.as_view(),),
    path('sendcomment', views.makeComment.as_view(),),
    path('companyposts', views.companyPosts,),
    path('comments', views.getComments,),
    path('companyposts/apply', views.ApplyForJob.as_view(),),
    path('companyposts/applications/<int:id>', views.Applications,),
    path('companyposts/applications/savechanges',
         views.SaveChanges.as_view(),),
    path('companyposts/deleteapp/<int:id>', views.DeleteApplication,),
    path('companyposts/userapplications', views.userApplications,),
    path('companyposts/edit/<int:id>', views.EditcompanyPosts.as_view(),),

]
