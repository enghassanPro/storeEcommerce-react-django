from django.db import models
from .categorie import Categorie

class Brand(models.Model):
    category        = models.ManyToManyField(Categorie , related_name="section")
    name            = models.CharField(max_length=150, unique=True)
    publish         = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name