from django.db import models
from .product import Product

type_size_choices = (

    ( "kg" , "kg" ),
    ( "m" , "m" ),
    ( "ml" , "ml" ),
    ( "mm" , "mm" ),
    ( "ft" , "ft" ),
    ( "inch" , "inch" ),
    ( "lt" , "liter" ),

)

class Product_Size(models.Model):
    product     = models.ForeignKey(Product , on_delete=models.CASCADE)
    size        = models.FloatField()
    type_size   = models.CharField(max_length=30 , choices=type_size_choices)

    def __str__(self):
        return self.product.title