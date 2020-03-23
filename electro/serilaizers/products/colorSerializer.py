from rest_framework import serializers
from ...models.product_color import Product_Color


class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Color
        fields = ('color',)

    def create(self, data):
        color = Product_Color(product=data.get(
            'product'), color=data.get('color'))
        color.save()
        return color

    def update(self, instance, data):
        instance.color = data
        instance.save()
        return instance
