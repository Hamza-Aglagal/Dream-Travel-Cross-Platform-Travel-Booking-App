from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView , TokenRefreshView, TokenVerifyView)

# from .views import *
from . import views


using_login_serializer = True

urlpatterns = [
    path('register', views.register, name='register' ),

    path('login', views.Login, name='login'),

  
]