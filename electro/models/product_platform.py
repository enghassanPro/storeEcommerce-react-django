from django.db import models
from .product import Product

class Product_Platform(models.Model):
    product     = models.ForeignKey(Product , on_delete=models.CASCADE)
    platform    = models.CharField(max_length=100)


    def __str__(self):
        return self.product.title