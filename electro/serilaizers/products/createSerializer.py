from rest_framework import serializers
from ...models.product import type_currency_choices, type_condition_choices
from ...models.brand import Brand
from ...models.product import Product, User


class CreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, data):
        pro = Product(
            user=User.objects.get(username='root'),
            brand=Brand.objects.get(id=data.get('brand')),
            title=data.get('title'),
            price=data.get('price'),
            currency=data.get('currency'),
            condition=data.get('condition'),
            description=data.get('description'),
            quantity=data.get('quantity')
        )
        pro.save()
        return pro
