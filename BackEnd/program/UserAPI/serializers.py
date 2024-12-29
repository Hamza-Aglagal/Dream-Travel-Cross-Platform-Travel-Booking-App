from rest_framework import serializers
from DashboardAPI.models import *


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
    id_destination = DestinationSerializer()
  
    
    class Meta:
        model = Hebergement
        fields = "__all__" 



class RestaurationSerializer(serializers.ModelSerializer):
  
    
    class Meta:
        model = Restauration
        fields = "__all__" 



class EvenementSerializer(serializers.ModelSerializer):
    id_destination = DestinationSerializer()
  
    
    class Meta:
        model = Evenement
        fields = "__all__" 

class AttractionSerializer(serializers.ModelSerializer):
    adresse = AdresseSerializer()
    id_destination = DestinationSerializer()
    
    class Meta:
        model = Attraction
        fields = "__all__" 




class AvisSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Avis
        fields = "__all__" 
class ShowAvisSerializer(serializers.ModelSerializer):
    id_user = UserSerializer()  
    class Meta:
        model = Avis
        fields = "__all__" 
# =====
class ConversationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Conversation
        fields = "__all__" 
class ConversationDesSerializer(serializers.ModelSerializer):
    recepteur = UserSerializer()

    class Meta:
        model = Conversation
        fields = "__all__" 
class ConversationRecSerializer(serializers.ModelSerializer):
    destinatair = UserSerializer()

    class Meta:
        model = Conversation
        fields = "__all__" 

# ===



class MessageLineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message_line
        fields = "__all__" 


class OffreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Offre
        fields = "__all__" 

class PromotionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Promotion
        fields = "__all__" 



class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = "__all__" 


class ActiviteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Activite
        fields = "__all__" 



class LigneActiviteSerializer(serializers.ModelSerializer):
    id_destination = DestinationSerializer()
    id_transport = TransportSerializer()
    id_restauration = RestaurationSerializer()
    id_hebergement = HebergementSerializer()
    id_evenement = EvenementSerializer()
    id_attraction = AttractionSerializer()
    
    class Meta:
        model = Ligne_activite
        fields = "__all__" 










