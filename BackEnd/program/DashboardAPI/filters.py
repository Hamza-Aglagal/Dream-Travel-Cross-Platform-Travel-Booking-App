import django_filters

from .models import *



class UserFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='iexact')
    keyword = django_filters.filters.CharFilter(field_name="prenom", lookup_expr="icontains")

    class Meta:
        model = Utilisateur
        fields = ['prenom', 'nom', 'contact','email','keyword']
 