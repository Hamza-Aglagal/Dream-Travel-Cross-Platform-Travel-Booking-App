from rest_framework import serializers

from DashboardAPI.models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model,authenticate
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken





class UserSerializer(serializers.ModelSerializer):

    class Meta :
        model = Utilisateur
        # fields = "__all__" 
        fields = ('id','nom','prenom','contact','dateN','email','id_adresse')


class SignUpSerializer(serializers.ModelSerializer):

    class Meta :
        model = Utilisateur
        fields = ('prenom','nom','email','password')

        extra_kwards = {
            'prenom' : { 'required': True, 'allow_blank' : False },
            'nom' : { 'required': True, 'allow_blank' : False },
            'email' : { 'required': True, 'allow_blank' : False },
            'password' : { 'required': True, 'allow_blank' : False, 'min_length' : 8 },
        }



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True, allow_blank=False)
    password = serializers.CharField(required=True, allow_blank=False, min_length=8)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if not email:
            raise serializers.ValidationError("Email is required.")

        user = Utilisateur.objects.filter(email=email).first()
        if not user:
            raise serializers.ValidationError("User with this email does not exist.")

        if not check_password(password, user.password):
            raise serializers.ValidationError("Invalid password.")

        refresh = RefreshToken.for_user(user)

        data['user'] = user
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        return data
    


class TokenSerializer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()
    user = UserSerializer()