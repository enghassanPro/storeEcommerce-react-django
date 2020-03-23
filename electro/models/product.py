from django.contrib.auth.models import User
from .brand import Brand
from django.db import models

type_currency_choices = (

    ("us", "USD"),
    ("euro", "EUR"),
    ("yen", "JPY"),
    ("br", "GBP"),
    ("swfr", "CHF"),
    ("cad", "CAD"),
    ("eg", "EGP"),
    ("safr", "ZAR"),
    ("emr", "AED"),

)

type_condition_choices = (

    ("nw", "New"),
    ("od", "Old"),
    ("us", "Used"),
)


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    title = models.CharField(max_length=150, unique=True)
    price = models.FloatField()
    currency = models.CharField(max_length=100, choices=type_currency_choices)
    quantity = models.IntegerField(default=0)
    condition = models.CharField(max_length=50, choices=type_condition_choices)
    description = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    publish = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
