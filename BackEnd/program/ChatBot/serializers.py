from rest_framework import serializers
from DashboardAPI.models import *



class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ['id', 'destinataire', 'recepteur', 'dateCreation', 'type', 'user_id']

class MessageLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message_line
        fields = ['id', 'time_envoie', 'date_envoie', 'message', 'convertation_id', 'id_user']