from rest_framework import serializers
from ...models.product_image import Product_Image


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Image
        fields = ('image',)

    # def validate(self, data):
    #     return data

    def create(self, data):
        img = Product_Image(product=data.get(
            'product'), image=data.get('image'))
        img.save()
        return img

    def update(self, instance, data):
        instance.image = data
        instance.save()
        return instance
