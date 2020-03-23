from rest_framework.serializers import ModelSerializer, Serializer
from ..models.brand import Brand


class BrandSerializer (ModelSerializer):
    class Meta:
        models = Brand
        fields = '__all__'
