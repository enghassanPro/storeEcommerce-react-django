from rest_framework import serializers
from ...models.product_platform import Product_Platform


class PlatformSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Platform
        fields = ('platform',)

    def create(self, data):
        pl = Product_Platform(product=data.get('product'),
                              platform=data.get('platform'))
        pl.save()
        return pl

    def update(self, instance, data):
        instance.platform = data
        instance.save()
        return instance
