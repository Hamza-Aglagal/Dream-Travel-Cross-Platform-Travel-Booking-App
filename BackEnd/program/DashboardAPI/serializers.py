from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):

    class Meta :
        model = Utilisateur
        fields = "__all__" 
        # fields = ('id','nom','prenom','contact','dateN','email','id_adresse')



class AdresseSerializer(serializers.ModelSerializer):

    class Meta :
        model = Adresse
        fields = "__all__" 


class AmisSerializer(serializers.ModelSerializer):

    id_user = UserSerializer()
    id_amis = UserSerializer()

    class Meta :
        model = Amis
        fields = "__all__" 

class AmisInputSerializer(serializers.Serializer):
    id_user = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())
    id_amis = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())
    dateAjout = serializers.DateField()

    def create(self, validated_data):
        return Amis.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id_user = validated_data.get('id_user', instance.id_user)
        instance.id_amis = validated_data.get('id_amis', instance.id_amis)
        instance.dateAjout = validated_data.get('dateAjout', instance.dateAjout)
        instance.save()
        return instance
    

class VilleSerializer(serializers.ModelSerializer):

    class Meta :
        model = Ville
        fields = "__all__" 




class DestinationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Destination
        fields = "__all__" 
class ShowDestinationSerializer(serializers.ModelSerializer):
    localisation = AdresseSerializer()
    id_ville = VilleSerializer()
    class Meta:
        model = Destination
        fields = "__all__" 




class TransportSerializer(serializers.ModelSerializer):
  
    
    class Meta:
        model = Transport
        fields = "__all__" 




class HebergementSerializer(serializers.ModelSerializer):
  
    
    class Meta:
        model = Hebergement
        fields = "__all__" 



class RestaurationSerializer(serializers.ModelSerializer):
  
    
    class Meta:
        model = Restauration
        fields = "__all__" 



class EvenementSerializer(serializers.ModelSerializer):
  
    
    class Meta:
        model = Evenement
        fields = "__all__" 

class AttractionSerializer(serializers.ModelSerializer):
  
    
    class Meta:
        model = Attraction
        fields = "__all__" 
