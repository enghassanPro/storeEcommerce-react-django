from rest_framework.serializers import Serializer, ModelSerializer
from ..models.categorie import Categorie


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Categorie
        fields = '__all__'
