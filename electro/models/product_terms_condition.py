from django.db import models
from .product import Product


class Product_Terms_Condition(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    terms_condition = models.TextField()

    def __str__(self):
        return self.product.title
