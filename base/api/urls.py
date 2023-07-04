from django.urls import path

from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)
from . import views 



urlpatterns = [
     path('profile/', views.getProfile),
     path('profile/edit', views.UpdateProfileView.as_view()),
    path('notes/', views.getNotes),
    path("signup/", views.SignupView.as_view()),
   
        path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
