from django.contrib import admin
from django.urls import path

from . import views



urlpatterns = [
    path('users', views.all_users ),
    path('user/<str:id>', views.get_User_By_Id),




    # ------- Adresse ------- 
    path('adresses', views.all_Adresee),
    path('adresse/create', views.Create_adresse),
    path('adresse/<str:id>', views.get_Adresse_By_Id),


    # ------- Amis ------- 
    path('user/<str:user_id>/amis', views.all_amis_of_user),
    path('amis/create', views.Create_amis),


    # ------- Ville ------- 
    path('villes', views.all_Ville),
    path('ville/create', views.Create_Ville),


    # ------- Destination ------- 
    path('destinations', views.all_destination),
    path('destination/create', views.Create_destination),
    path('destination/<str:id>', views.get_Destination_By_Id),


    # ------- Transport ------- 
    path('transports', views.all_transport),
    path('transport/create', views.Create_transport),
    path('transport/<str:id>', views.get_transport_By_Id),
    
    # ------- Hebergement ------- 
    path('hebergements', views.all_hebergement),
    path('hebergement/create', views.Create_hebergement),
    path('hebergement/<str:id>', views.get_hebergement_By_Id),


    # ------- Restauration ------- 
    path('restaurations', views.all_restauration),
    path('restauration/create', views.Create_restaurations),
    path('restauration/<str:id>', views.get_restaurations_By_Id),

    # ------- Evenement ------- 
    path('evenements', views.all_evenement),
    path('evenement/create', views.Create_evenement),
    path('evenement/<str:id>', views.get_evenement_By_Id),


    # ------- Attraction ------- 
    path('attractions', views.all_attraction),
    path('attraction/create', views.Create_attractiont),
    path('attraction/<str:id>', views.get_attractiont_By_Id),


    # ------- Adresse ------- 
    # ------- Adresse ------- 


]