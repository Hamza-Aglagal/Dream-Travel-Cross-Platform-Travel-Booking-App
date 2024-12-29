# Chat/routing.py

from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from .consumers import ChatConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter(
        [
            path("ws/chat/<int:conversation_id>/", ChatConsumer.as_asgi()),
            # Add more WebSocket paths and consumers here as needed
        ]
    ),
})
