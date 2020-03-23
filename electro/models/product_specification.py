from django.db import models
from .product import Product

class Product_Specification(models.Model):
    product     = models.ForeignKey(Product , on_delete=models.CASCADE)
    name        = models.CharField(max_length=100)
    value       = models.CharField(max_length=300)
    publish     = models.DateTimeField(auto_now_add=True)
    update     = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product.title