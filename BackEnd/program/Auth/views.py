from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from DashboardAPI.models import * 
from django.contrib.auth.hashers import make_password
from rest_framework import status
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import exceptions

from datetime import timedelta
from django.utils import timezone
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

from rest_framework import views, status



@api_view(['POST'])
def Login(request):
    data = request.data 
    serializer = LoginSerializer(data=data)
    
    if serializer.is_valid():
        user = serializer.validated_data['user']
        refresh = serializer.validated_data['refresh']
        access = serializer.validated_data['access']

        token_serializer = TokenSerializer({'access': access, 'refresh': refresh, 'user': user})
        return Response(token_serializer.data  ,status=status.HTTP_200_OK)
         
    return Response(serializer.errors, status=status.HTTP_200_OK)




@api_view(['POST'])
def register(request):
    data = request.data 
    user = SignUpSerializer(data = data)

    if user.is_valid():
        if not Utilisateur.objects.filter(email = data['email']).exists() :
            user = Utilisateur.objects.create(
                prenom = data['prenom'],
                nom = data['nom'],
                email = data['email'],
                password = make_password(data['password']), 
            )
            
            return Response(
                    {'reponse': 'SingUp successfully ! '},
                    status=status.HTTP_201_CREATED
                )
        else :
            return Response(
                {'error' : 'This email already exists'},
                status=status.HTTP_200_OK
            )   
    else :
            return Response(user.errors)  
    


