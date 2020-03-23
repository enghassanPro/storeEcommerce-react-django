from rest_framework import serializers
from ...models.product_terms_condition import Product_Terms_Condition


class TermConditionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Terms_Condition
        fields = ('terms_condition',)

    def create(self, data):
        terms_condition = Product_Terms_Condition(product=data.get(
            'product'), terms_condition=data.get('terms_condition'))
        terms_condition.save()
        return terms_condition

    def update(self, instance, data):
        instance.terms_condition = data
        instance.save()
        return instance
