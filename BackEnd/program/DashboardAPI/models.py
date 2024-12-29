from django.db import models

from django.core.validators import EmailValidator, MinLengthValidator
# from django.contrib.postgres.fields import JSONField
from django.db.models import JSONField

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

from django.db import models




class Admin(models.Model):
    name = models.CharField(max_length=30)
    username = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    mail = models.CharField(max_length=30, validators=[EmailValidator()])
    password = models.CharField(max_length=30, validators=[MinLengthValidator(8)])




class Adresse(models.Model):
    rue = models.CharField(max_length=50, null=True)
    serie = models.CharField(max_length=70, null=True)
    ville = models.CharField(max_length=30, null=True)
    codePostal = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.rue 



class Utilisateur(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50, null=True)
    contact = models.CharField(max_length=30, null=True)
    dateN = models.DateField(null=True) 
    email = models.CharField(max_length=30, validators=[EmailValidator()])
    password = models.CharField(max_length=500, validators=[MinLengthValidator(8)])
    # token = models.CharField(max_length=500, null=True)
    
    id_adresse = models.ForeignKey(Adresse, on_delete=models.SET_NULL, null=True)


    # USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.nom 



class Amis(models.Model):
    id_user = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE , related_name='amis_as_user')
    id_amis = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE , related_name='amis_as_friend')
    dateAjout = models.DateField() 



class Ville(models.Model):
    name = models.CharField(max_length=50)

    




class Destination(models.Model):
    nom = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    localisation = models.ForeignKey(Adresse, on_delete=models.SET_NULL, null=True)
    id_ville = models.ForeignKey(Ville, on_delete=models.CASCADE)
    images = models.JSONField(null=True, blank=True)

    

class Transport(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    

class Hebergement(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=500)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    adresse = models.ForeignKey(Adresse, on_delete=models.SET_NULL, null=True)
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)


class Restauration(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=500)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    specialite = models.CharField(max_length=30) 
    adresse = models.ForeignKey(Adresse, on_delete=models.SET_NULL, null=True)
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)




class Evenement(models.Model):  
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=500)
    prix = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    date_debut = models.DateField() 
    date_fin = models.DateField() 
    time_debut = models.TimeField(null=True) 
    time_fin = models.TimeField(null=True) 
    adresse = models.ForeignKey(Adresse, on_delete=models.SET_NULL, null=True)
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)



class Attraction(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    prix = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    adresse = models.ForeignKey(Adresse, on_delete=models.SET_NULL, null=True)
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)



class Avis(models.Model):
    commentaire = models.CharField(max_length=300, null=True)
    type = models.CharField(max_length=20)
    rating = models.DecimalField(max_digits=10, decimal_places=1, null=True)
    id_user = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE)
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)



class Conversation(models.Model):
    destinatair = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE , related_name='destinataire', null=True)
    recepteur = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE , related_name='recepteur', null=True)
    dateCreation = models.DateField()
    type = models.CharField(max_length=20, null=True)
    user_id = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE , related_name='user_id', null=True)




class Message_line(models.Model):
    time_envoie = models.TimeField(null= True) 
    date_envoie = models.DateField() 
    message = models.CharField(max_length=50000, null=True)
    convertation_id = models.ForeignKey(Conversation,  on_delete=models.CASCADE)
    id_user = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE ,null=True )



class Offre(models.Model):
    date_debut = models.DateField()
    date_fin = models.DateField()
    description = models.CharField(max_length=500, null=True)
    prix = models.DecimalField(max_digits=10, decimal_places=2, null=True)

    destinations = models.ManyToManyField(Destination, blank=True)
    transports = models.ManyToManyField(Transport, blank=True)
    restaurations = models.ManyToManyField(Restauration, blank=True)
    hebergements = models.ManyToManyField(Hebergement, blank=True)
    evenements = models.ManyToManyField(Evenement, blank=True)



class Promotion(models.Model):
    date_debut = models.DateField()
    date_fin = models.DateField()
    description = models.CharField(max_length=500)
    reduction = models.DecimalField(max_digits=10, decimal_places=2)
    attraction = models.ForeignKey(Attraction,  on_delete=models.CASCADE)




class Notification(models.Model):
    date_envoie = models.DateField() 
    message = models.CharField(max_length=500)
    type = models.CharField(max_length=20)
    id_recepteur = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE, null=True , related_name='received_notifications' )
    id_destinataire = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, null=True , related_name='sent_notifications')
    offre = models.ForeignKey(Offre,  on_delete=models.CASCADE, null=True)
    promotion = models.ForeignKey(Promotion,  on_delete=models.CASCADE, null=True)



class Activite(models.Model):
    date_creation = models.DateField()
    id_user = models.ForeignKey(Utilisateur,  on_delete=models.CASCADE, null=True , related_name='activites_user' )



class Ligne_activite(models.Model):
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True)

    id_transport = models.ForeignKey(Transport, on_delete=models.CASCADE, null=True)
    id_restauration = models.ForeignKey(Restauration, on_delete=models.CASCADE, null=True)
    id_hebergement = models.ForeignKey(Hebergement, on_delete=models.CASCADE, null=True)
    id_evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE, null=True)
    id_attraction = models.ForeignKey(Attraction, on_delete=models.CASCADE, null=True)

    id_Activite =  models.ForeignKey(Activite,  on_delete=models.CASCADE, null=True)





















