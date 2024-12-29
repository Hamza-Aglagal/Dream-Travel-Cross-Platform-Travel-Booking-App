from django.shortcuts import get_object_or_404, render
from rest_framework import status
# Create your views here.

from django.http import HttpResponse
import datetime

from django.db.models import Avg


from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
# from .filters import UserFilter
from django.db.models import Count


# -------- Users --------

@api_view(['GET'])
def all_users(request):
    users = Utilisateur.objects.all()
    serializer = UserSerializer(users , many=True)
    return Response({"data" : serializer.data })
 
@api_view(['GET'])  
def get_User_By_Id(request, id):
    user = get_object_or_404(Utilisateur, id= id)
    serializer = UserSerializer(user , many=False)
    return Response({"data" : serializer.data })
 


# -------- Adresse --------
@api_view(['GET'])
def all_Adresee(request):
    adresses = Adresse.objects.all()
    serializer = AdresseSerializer(adresses , many=True)

    return Response({"data" : serializer.data })  


@api_view(['POST'])
def Create_adresse(request):
    serializer = AdresseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'cree avec success !'}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET'])  
def get_Adresse_By_Id(request, id):
    user = get_object_or_404(Adresse, id= id)
    serializer = AdresseSerializer(user , many=False)
    return Response({"data" : serializer.data })
 

# -------- Amis --------
@api_view(['GET'])
def all_amis_of_user(request, user_id):
    amis = Amis.objects.filter(id_user=user_id)
    serializer = AmisSerializer(amis, many=True)
    return Response({"data": serializer.data})

@api_view(['POST'])
def Create_amis(request):
    amis_serializer = AmisInputSerializer(data=request.data)
    if amis_serializer.is_valid():
        id_user = amis_serializer.validated_data['id_user'].id
        id_amis = amis_serializer.validated_data['id_amis'].id

        if Amis.objects.filter(id_user=id_user, id_amis=id_amis).exists():
            return Response({'error': 'La relation  existe deja.'}, status=status.HTTP_400_BAD_REQUEST)
        
        amis_serializer.save()
        return Response({'success': 'Cree avec succès!'}, status=status.HTTP_201_CREATED)
    else:
        return Response(amis_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------- Ville --------
@api_view(['GET'])
def all_Ville(request):
    villes = Ville.objects.all()
    serializer = VilleSerializer(villes , many=True)

    return Response({"data" : serializer.data })  


# -------- Destinations --------
@api_view(['GET'])
def all_destination(request):
    destinations = Destination.objects.all()
    serializer = DestinationSerializer(destinations, many=True)

    data = serializer.data
    grouped_data = [data[i:i+2] for i in range(0, len(data), 2)]

    return Response({"data": grouped_data})

@api_view(['GET'])
def popular_destinations(request):
    destinations = Destination.objects.annotate(
        num_reviews=Count('avis'),
        average_rating=Avg('avis__rating')
    )
    popular_destinations = destinations.order_by('-num_reviews')
    serialized_data = []
    for destination in popular_destinations:
        data = DestinationSerializer(destination).data
        data['num_reviews'] = destination.num_reviews
        data['average_rating'] = destination.average_rating
        serialized_data.append(data)
    return Response({"data": serialized_data})


@api_view(['GET'])  
def get_Destination_By_Id(request, id):
    destination = get_object_or_404(Destination, id=id)
    destination_serializer = DestinationSerializer(destination, many=False)
    
    # Fetch related objects
    transports = destination.transport_set.all()
    hebergements = destination.hebergement_set.all()
    restaurations = destination.restauration_set.all()
    attractions = destination.attraction_set.all()
    evenements = destination.evenement_set.all()
    
    # Serialize related objects
    transport_serializer = TransportSerializer(transports, many=True)
    hebergement_serializer = HebergementSerializer(hebergements, many=True)
    restauration_serializer = RestaurationSerializer(restaurations, many=True)
    attraction_serializer = AttractionSerializer(attractions, many=True)
    evenement_serializer = EvenementSerializer(evenements, many=True)
    
    # Fetch and calculate average rating
    avis = Avis.objects.filter(id_destination=destination)
    avis_serializer = ShowAvisSerializer(avis, many=True)
    average_rating = avis.aggregate(Avg('rating'))['rating__avg']
    
    return Response({
        "data": {
            "destination": destination_serializer.data,
            "transports": transport_serializer.data,
            "hebergements": hebergement_serializer.data,
            "restaurations": restauration_serializer.data,
            "attractions": attraction_serializer.data,
            "evenements": evenement_serializer.data,
            "avis": avis_serializer.data,
            "rating": average_rating,
        }
    })


# -------- Transport --------

@api_view(['GET'])
def all_transport(request):
    Transports = Transport.objects.all()
    serializer = TransportSerializer(Transports , many=True)

    return Response({"data" : serializer.data })  



@api_view(['GET'])
def get_transport_By_Id(request, id):
    transport = get_object_or_404(Transport, id=id)
    serializer = TransportSerializer(transport)
    return Response({"data": serializer.data})



# -------- Hebergement --------

@api_view(['GET'])
def all_hebergement(request):
    Hebergements = Hebergement.objects.all()
    serializer = HebergementSerializer(Hebergements , many=True)

    return Response({"data" : serializer.data })  



@api_view(['GET'])
def get_hebergement_By_Id(request, id):
    hebergement = get_object_or_404(Hebergement, id=id)
    serializer = HebergementSerializer(hebergement)
    return Response({"data": serializer.data})



# -------- Restauration --------

@api_view(['GET'])
def all_restauration(request):
    Restaurations = Restauration.objects.all()
    serializer = RestaurationSerializer(Restaurations , many=True)

    return Response({"data" : serializer.data })  


@api_view(['GET'])
def get_restaurations_By_Id(request, id):
    restauration = get_object_or_404(Restauration, id=id)
    serializer = RestaurationSerializer(restauration)
    return Response({"data": serializer.data})


# -------- Evenement --------

@api_view(['GET'])
def all_evenement(request):
    evenements = Evenement.objects.all()
    serializer = EvenementSerializer(evenements , many=True)

    return Response({"data" : serializer.data })  



@api_view(['GET'])
def get_evenement_By_Id(request, id):
    evenement = get_object_or_404(Evenement, id=id)
    serializer = EvenementSerializer(evenement)
    return Response({"data": serializer.data})


# -------- Attraction --------

@api_view(['GET'])
def all_attraction(request):
    attractions = Attraction.objects.all()
    serializer = AttractionSerializer(attractions , many=True)

    return Response({"data" : serializer.data })  


@api_view(['GET'])
def get_attractiont_By_Id(request, id):
    attraction = get_object_or_404(Attraction, id=id)
    serializer = AttractionSerializer(attraction)
    return Response({"data": serializer.data})

# -------- Avis --------
@api_view(['GET'])
def all_Avis_of_destination(request, id_des):
    avis = Avis.objects.filter(id_destination=id_des, type="commentaire")
    serializer = ShowAvisSerializer(avis, many=True)
    return Response({"data": serializer.data})

@api_view(['POST'])
def Create_Avis_of_destination(request):
    serializer = AvisSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Avis created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# -------- Conversation --------
@api_view(['GET'])
def all_Conversation_of_user(request, id_user):
    conversations_des = Conversation.objects.filter(destinatair=id_user) 
    conversations_rec = Conversation.objects.filter(recepteur=id_user)
    serializer_des = ConversationDesSerializer(conversations_des, many=True)
    serializer_rec = ConversationRecSerializer(conversations_rec, many=True)
    combined_data = serializer_des.data + serializer_rec.data
    return Response({"data": combined_data})
    
@api_view(['POST'])
def Create_Conversation(request):
    serializer = ConversationSerializer(data=request.data)
    if serializer.is_valid():
        destinatair = serializer.validated_data.get('destinatair')
        recepteur = serializer.validated_data.get('recepteur')
        if Conversation.objects.filter(destinatair=destinatair, recepteur=recepteur).exists() or \
           Conversation.objects.filter(destinatair=recepteur, recepteur=destinatair).exists():
            return Response({"message": "Conversation already exists"}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response({"message": "Conversation created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------- Message_line --------        
@api_view(['GET'])
def all_messages_of_conversation(request, id_conversation):
    messages = Message_line.objects.filter(convertation_id=id_conversation).order_by('date_envoie', 'time_envoie')
    serializer = MessageLineSerializer(messages, many=True)
    return Response({"data": serializer.data})

@api_view(['POST'])
def Create_message(request):
    if request.method == 'POST':
        serializer = MessageLineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Message created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def get_name_friend(request, conv_id, user_id):
    try:
        conversation = Conversation.objects.get(id=conv_id)
        user = Utilisateur.objects.get(id=user_id)
        
        if conversation.destinatair == user:
            friend = conversation.recepteur
        elif conversation.recepteur == user:
            friend = conversation.destinatair
        else:
            return Response({"error": "User is not part of the conversation"}, status=status.HTTP_404_NOT_FOUND)
        friend_name = friend.prenom + ' ' + friend.nom
        return Response({"friend_name": friend_name }, status=status.HTTP_200_OK)
    
    except Conversation.DoesNotExist:
        return Response({"error": "Conversation not found"}, status=status.HTTP_404_NOT_FOUND)
    
    except Utilisateur.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)




# -------- Offres --------
@api_view(['GET'])
def all_offres(request):
    offres = Offre.objects.all()
    serializer = OffreSerializer(offres, many=True)
    return Response({"data": serializer.data})

# -------- Promotion --------
@api_view(['GET'])
def all_Promotions(request):
    promotions = Promotion.objects.all()
    serializer = PromotionSerializer(promotions, many=True)
    return Response({"data": serializer.data})


# -------- Notification --------
@api_view(['GET'])
def all_Notification(request):
    notifications = Notification.objects.filter(type="public")
    serializer = NotificationSerializer(notifications, many=True)
    return Response({"data": serializer.data})

@api_view(['GET'])
def Notification_prive_of_user(request, id):
    private_notifications = Notification.objects.filter(type="prive", id_recepteur=id)
    serializer = NotificationSerializer(private_notifications, many=True)
    return Response({"data": serializer.data})



# -------- Activite --------
@api_view(['GET'])
def all_Activite_of_user(request, id):
    activites = Activite.objects.filter(id_user=id)
    serializer = ActiviteSerializer(activites, many=True)
    return Response({"data": serializer.data})


@api_view(['POST'])
def Create_activite(request):
    serializer = ActiviteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Activity created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_activite(request, id_activite):
    try:
        activite = Activite.objects.get(id=id_activite)
    except Activite.DoesNotExist:
        return Response({"message": "Activity not found"}, status=status.HTTP_404_NOT_FOUND)

    activite.delete()
    return Response({"message": "Activity deleted successfully"}, status=status.HTTP_204_NO_CONTENT)



# -------- Activite --------
@api_view(['GET'])
def all_Ligne_activite_of_activite(request, id_activite):
    lignes_activite = Ligne_activite.objects.filter(id_Activite=id_activite)
    serializer = LigneActiviteSerializer(lignes_activite, many=True)
    return Response({"data": serializer.data})

@api_view(['POST'])
def Create_ligne_activite(request):
    serializer = LigneActiviteSerializer(data=request.data)
    if serializer.is_valid():
        existing_ligne_activites = Ligne_activite.objects.filter(**serializer.validated_data)
        if existing_ligne_activites.exists():
            return Response({"message": "Line activity already exists"}, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response({"message": "Line activity created successfully"}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_ligne_activite(request, id_ligne_activite):
    try:
        ligne_activite = Ligne_activite.objects.get(id=id_ligne_activite)
    except Ligne_activite.DoesNotExist:
        return Response({"message": "Line activity not found"}, status=status.HTTP_404_NOT_FOUND)

    ligne_activite.delete()
    return Response({"message": "Line activity deleted successfully"}, status=status.HTTP_204_NO_CONTENT)












