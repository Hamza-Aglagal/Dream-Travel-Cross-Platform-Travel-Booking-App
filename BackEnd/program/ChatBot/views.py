from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import views, status

from DashboardAPI.models import *
from .serializers import *
import google.generativeai as genai

from django.utils import timezone

# Api key :  AIzaSyClSdkikwC78G1kGOoRNDa9SbfbacQWTss




GOOGLE_API_KEY='AIzaSyClSdkikwC78G1kGOoRNDa9SbfbacQWTss'
genai.configure(api_key=GOOGLE_API_KEY)



from django.shortcuts import get_object_or_404
from django.utils import timezone



@api_view(['POST'])
def send_message_to_chatbot(request):
    if request.method == 'POST':
        data = request.data
        user_id = data.get('user_id')
        prompt = data.get('message')

        user_instance = get_object_or_404(Utilisateur, id=user_id)


        conversation, created = Conversation.objects.get_or_create(
            user_id=user_instance.id, 
            type='ChatBot'
        )

        
        user_message_data = {
            'message': prompt,
            'convertation_id': conversation.id,
            'id_user': user_instance.id,
            'date_envoie': timezone.now().date(),
            'time_envoie': timezone.now().time(),
        }
        user_message_serializer = MessageLineSerializer(data=user_message_data)
        if user_message_serializer.is_valid():
            user_message_serializer.save()

        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        chatbot_response = ''.join([p.text for p in response.candidates[0].content.parts])

        chatbot_message_data = {
            'message': chatbot_response,
            'convertation_id': conversation.id,
            'date_envoie': timezone.now().date(),
            'time_envoie': timezone.now().time(),
        }
        chatbot_message_serializer = MessageLineSerializer(data=chatbot_message_data)
        if chatbot_message_serializer.is_valid():
            chatbot_message_serializer.save()

        return Response({'message': chatbot_response})
    else:
        return Response({'error': 'Invalid request'})






@api_view(['GET'])
def All_message_Conversation_Of_User(request, id_user):

    conversation = Conversation.objects.filter(user_id=id_user, type="ChatBot").first()

    if conversation:
        messages = Message_line.objects.filter(convertation_id=conversation.id)

        serializer = MessageLineSerializer(messages, many=True)
        
        return Response({"data": serializer.data})
    else:
        return Response({"error": "No conversation found for the user with the given ID and type 'ChatBot'"})