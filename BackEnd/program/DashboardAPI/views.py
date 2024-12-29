from django.shortcuts import get_object_or_404, render
from rest_framework import status
# Create your views here.

from django.http import HttpResponse
import datetime



from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from .filters import UserFilter



# -------- Users --------

@api_view(['GET'])
def all_users(request):
    # users = Utilisateur.objects.all()
    # serializer = UserSerializer(users , many=True)

    filterset = UserFilter(request.GET , queryset= Utilisateur.objects.all().order_by('id'))
    serializer = UserSerializer(filterset.qs , many=True)

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
    serie = request.data.get('serie')
    
    if Adresse.objects.filter(serie=serie).exists():
        return Response({'error': 'Une adresse avec cette série existe déjà.'}, status=400)

    serializer = AdresseSerializer(data=request.data)
    if serializer.is_valid():
        adresse = serializer.save()
        return Response({'success': 'créé avec succès!', 'id': adresse.id}, status=201)
    
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


@api_view(['POST'])
def Create_Ville(request):
    serializer = VilleSerializer(data=request.data)
    if serializer.is_valid():
        nom_ville = serializer.validated_data['name']
        if Ville.objects.filter(name=nom_ville).exists():
            return Response({'error': 'La ville existe deja.'}, status=status.HTTP_400_BAD_REQUEST) 
        serializer.save()
        return Response({'success': 'Cree avec succes!'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# -------- Destinations --------
@api_view(['GET'])
def all_destination(request):
    destinations = Destination.objects.all()
    serializer = ShowDestinationSerializer(destinations , many=True)
    return Response({"data" : serializer.data })  




@api_view(['POST'])
def Create_destination(request):
    serializer = DestinationSerializer(data=request.data)
    if serializer.is_valid():
        nom = serializer.validated_data['nom']
        id_ville = serializer.validated_data['id_ville']

        if Destination.objects.filter(nom=nom, id_ville=id_ville).exists():
            return Response({'error': 'Cette destination existe déjà.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response({'success': 'Créé avec succès!'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])  
def get_Destination_By_Id(request, id):
    user = get_object_or_404(Destination, id= id)
    serializer = ShowDestinationSerializer(user , many=False)
    return Response({"data" : serializer.data })


# -------- Transport --------

@api_view(['GET'])
def all_transport(request):
    Transports = Transport.objects.all()
    serializer = TransportSerializer(Transports , many=True)

    return Response({"data" : serializer.data })  


@api_view(['POST'])
def Create_transport(request):
    serializer = TransportSerializer(data=request.data)
    if serializer.is_valid():
        nom = serializer.validated_data.get('name')
        id_destination = serializer.validated_data.get('id_destination')
        if Transport.objects.filter(name=nom, id_destination=id_destination).exists():
            return Response({'error': 'La Transport existe deja.'}, status=status.HTTP_400_BAD_REQUEST) 
        serializer.save()
        return Response({'success': 'Cree avec succes!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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


@api_view(['POST'])
def Create_hebergement(request):
    serializer = HebergementSerializer(data=request.data)
    if serializer.is_valid():
        name = serializer.validated_data.get('name')
        adresse = serializer.validated_data.get('adresse')
        id_destination = serializer.validated_data.get('id_destination')
        if Hebergement.objects.filter(name=name, adresse=adresse, id_destination=id_destination).exists():
            return Response({'error': "L' Hebergement existe deja."}, status=status.HTTP_400_BAD_REQUEST) 
        serializer.save()
        return Response({'success': 'Cree avec succes!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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


@api_view(['POST'])
def Create_restaurations(request):
    serializer = RestaurationSerializer(data=request.data)
    if serializer.is_valid():
        name = serializer.validated_data.get('name')
        adresse = serializer.validated_data.get('adresse')
        id_destination = serializer.validated_data.get('id_destination')
        if Restauration.objects.filter(name=name, adresse=adresse, id_destination=id_destination).exists():
            return Response({'error': "Restauration existe deja."}, status=status.HTTP_400_BAD_REQUEST) 
        serializer.save()
        return Response({'success': 'Cree avec succes!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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


@api_view(['POST'])
def Create_evenement(request):
    serializer = EvenementSerializer(data=request.data)
    if serializer.is_valid():
        name = serializer.validated_data.get('name')
        date_debut = serializer.validated_data.get('date_debut')
        date_fin = serializer.validated_data.get('date_fin')
        adresse = serializer.validated_data.get('adresse')
        id_destination = serializer.validated_data.get('id_destination')
        if Evenement.objects.filter(name=name, date_debut=date_debut, date_fin=date_fin ,adresse=adresse, id_destination=id_destination).exists():
            return Response({'error': "Evenement existe deja."}, status=status.HTTP_400_BAD_REQUEST) 
        serializer.save()
        return Response({'success': 'Cree avec succes!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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


@api_view(['POST'])
def Create_attractiont(request):
    serializer = AttractionSerializer(data=request.data)
    if serializer.is_valid():
        name = serializer.validated_data.get('name')
        adresse = serializer.validated_data.get('adresse')
        id_destination = serializer.validated_data.get('id_destination')
        if Attraction.objects.filter(name=name, adresse=adresse, id_destination=id_destination).exists():
            return Response({'error': "Attractiont existe deja."}, status=status.HTTP_400_BAD_REQUEST) 
        serializer.save()
        return Response({'success': 'Cree avec succes!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_attractiont_By_Id(request, id):
    attraction = get_object_or_404(Attraction, id=id)
    serializer = AttractionSerializer(attraction)
    return Response({"data": serializer.data})

# -------- Destinations --------
# -------- Destinations --------
# -------- Destinations --------
# -------- Destinations --------
