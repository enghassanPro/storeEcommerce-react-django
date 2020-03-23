from django.db import models
from .product import Product

color_choices = (

    ( "rd" , "Red" ),
    ( "org" , "Orange" ),
    ( "yw" , "Yellow" ),
    ( "grn" , "Green" ),
    ( "be" , "Blue" ),
    ( "br" , "Brown" ),
    ( "mga" , "Magenta" ),
    ( "tn" , "Tan" ),
    ( "cyn" , "Cyan" ),
    ( "ov" , "Olive" ),
    ( "mron" , "Maroon" ),
    ( "nvy" , "Navy" ),
    ( "aqne" , "Aquamarine" ),
    ( "tqse" , "Turquoise" ),
    ( "svr" , "Silver" ),
    ( "lm" , "Lime" ),
    ( "tl" , "Teal" ),
    ( "igo" , "Indigo" ),
    ( "vlt" , "Violet" ),
    ( "pk" , "Pink" ),
    ( "blk" , "Black" ),
    ( "wit" , "White" ),
    ( "gry" , "Grey" ),
    
)

class Product_Color(models.Model):
    product     = models.ForeignKey(Product , on_delete=models.CASCADE)
    color       = models.CharField(max_length=50 , choices=color_choices)

    def __str__(self):
        return self.product.title