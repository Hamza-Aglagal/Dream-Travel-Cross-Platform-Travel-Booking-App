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


    # ------- Destination ------- 
    path('destinations', views.all_destination),
    path('popular-destinations', views.popular_destinations),
    path('destination/<str:id>', views.get_Destination_By_Id),


    # ------- Transport ------- 
    path('transports', views.all_transport),
    path('transport/<str:id>', views.get_transport_By_Id),
    
    # ------- Hebergement ------- 
    path('hebergements', views.all_hebergement),
    path('hebergement/<str:id>', views.get_hebergement_By_Id),


     # ------- Restauration ------- 
    path('restaurations', views.all_restauration),
    path('restauration/<str:id>', views.get_restaurations_By_Id),

    # ------- Evenement ------- 
    path('evenements', views.all_evenement),
    path('evenement/<str:id>', views.get_evenement_By_Id),


    # ------- Attraction ------- 
    path('attractions', views.all_attraction),
    path('attraction/<str:id>', views.get_attractiont_By_Id),

    # ------- Avis ------- 
    path('avis/<str:id_des>', views.all_Avis_of_destination),
    path('create-avis', views.Create_Avis_of_destination),

    
    # ------- Conversation ------- 
    path('conversation/<str:id_user>', views.all_Conversation_of_user),
    path('create-Conversation', views.  Create_Conversation),

    # ------- Message_line ------- 
    path('messages/<str:id_conversation>', views.all_messages_of_conversation),
    path('create-message', views.  Create_message),
    path('name-friend/<str:conv_id>/<str:user_id>', views.get_name_friend),

    # ------- Offre ------- 
    path('offres', views.all_offres),
    
    # ------- Promotion ------- 
    path('promotions', views.all_Promotions),

    # ------- Notification ------- 
    path('notifications', views.all_Notification),
    path('notification/<str:id>', views.Notification_prive_of_user),

    # ------- Activite ------- 
    path('activites/<str:id>', views.all_Activite_of_user),
    path('create-activite', views.Create_activite),
    path('delete-activite/<str:id_activite>', views.delete_activite),


    # ------- Ligne_activite ------- 
    path('Ligne_activite/<str:id_activite>', views.all_Ligne_activite_of_activite),
    path('create-ligne_activite', views.Create_ligne_activite),
    path('delete-ligne_activite/<str:id_ligne_activite>', views.delete_ligne_activite),




]