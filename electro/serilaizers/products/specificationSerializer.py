from rest_framework import serializers
from ...models.product_specification import Product_Specification


class SpecificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Specification
        fields = ('name', 'value',)

    def validate(self, data):
        # print(data)
        return data

    def create(self, data):
        sp = Product_Specification(product=data.get(
            'product'), name=data.get('name'), value=data.get('value'))
        sp.save()
        return sp

    def update(self, instance, data):
        instance.name = data.get('name')
        instance.value = data.get('value')
        instance.save()
        return instance
