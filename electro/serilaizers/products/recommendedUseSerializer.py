from rest_framework import serializers
from ...models.product_recommended_use import Product_Recommended_Use


class RecommendedUseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Recommended_Use
        fields = ('recommended_use',)

    def create(self, data):
        recommended_use = Product_Recommended_Use(product=data.get(
            'product'), recommended_use=data.get('recommended_use'))
        recommended_use.save()
        return recommended_use

    def update(self, instance, data):
        instance.recommended_use = data
        instance.save()
        return instance
