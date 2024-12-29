from django.contrib import admin
from django.urls import path

from .views import * 



urlpatterns = [
    path('send-message', send_message_to_chatbot, name='chatbot'),
    path('all-messages/<str:id_user>', All_message_Conversation_Of_User, name='all_messages'),
]