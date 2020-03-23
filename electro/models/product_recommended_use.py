from django.db import models
from .product import Product

class Product_Recommended_Use(models.Model):
    product         = models.ForeignKey(Product , on_delete=models.CASCADE)
    recommended_use = models.CharField(max_length=150)
     
    def __str__(self):
        return self.product.title