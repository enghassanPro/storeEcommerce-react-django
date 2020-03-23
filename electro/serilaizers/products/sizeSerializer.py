from rest_framework import serializers
from ...models.product_size import Product_Size


class SizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Size
        fields = ('size', 'type_size',)

    def create(self, data):
        size = Product_Size(product=data.get('product'), size=data.get(
            'size'), type_size=data.get('type_size'))
        size.save()
        return size

    def update(self, instance, data):
        instance.size = data.get('size')
        instance.type_size = data.get('type_size')
        instance.save()
        return instance
