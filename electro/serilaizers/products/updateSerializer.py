from rest_framework import serializers
from ...models.product import type_currency_choices, type_condition_choices
from ...models.brand import Brand
from ...models.product import Product, User
from ...models.product_specification import Product_Specification
from ...models.product_image import Product_Image
from ...models.product_platform import Product_Platform
from ...models.product_color import Product_Color
from ...models.product_size import Product_Size
from ...models.product_terms_condition import Product_Terms_Condition
from ...models.product_recommended_use import Product_Recommended_Use


class UpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

    def update(self, instance, data):
        instance.title = data.get('title')
        instance.brand = Brand.objects.get(id=data.get('brand'))
        instance.price = data.get('price')
        instance.quantity = data.get('quantity')
        instance.currency = data.get('currency')
        instance.condition = data.get('condition')
        instance.description = data.get('description')
        instance.save()

        return instance
