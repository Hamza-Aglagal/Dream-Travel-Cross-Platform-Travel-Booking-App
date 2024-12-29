import json
from channels.generic.websocket import AsyncWebsocketConsumer
from DashboardAPI.models import *


class ChatConsumer(AsyncWebsocketConsumer):


    async def connect(self):
        conversation_id = self.scope['url_route']['kwargs']['conversation_id']
        await self.channel_layer.group_add(
            str(conversation_id),
            self.channel_name
        )
        await self.accept()





    async def disconnect(self, close_code):
        conversation_id = self.scope['url_route']['kwargs']['conversation_id']
        await self.channel_layer.group_discard(
            str(conversation_id),
            self.channel_name
        )


    async def receive(self, text_data):
        data = json.loads(text_data)
        message_content = data['message']
        sender_id = data['sender_id']
        conversation_id = data['conversation_id']

        # Save message to database and associate it with the conversation
        Message_line.objects.create(
            message=message_content,
            convertation_id=conversation_id,  # Assuming `convertation` is the ForeignKey field to Conversation
            id_user_id=sender_id  # Assuming `id_user` is the ForeignKey field to Utilisateur
        )

        # Broadcast message to other clients in the same conversation
        await self.channel_layer.group_send(
            str(conversation_id),
            {
                'type': 'chat_message',
                'content': message_content,
                'sender_id': sender_id
            }
        )

    async def chat_message(self, event):
        message_content = event['content']
        sender_id = event['sender_id']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'content': message_content,
            'sender_id': sender_id
        }))
