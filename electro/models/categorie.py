from django.db import models


class Categorie(models.Model):
    title       = models.CharField(max_length=150 , unique=True)
    parent      = models.ForeignKey('self' , on_delete=models.CASCADE , blank=True, null=True)
    updated     = models.DateTimeField(auto_now=True) 
    publish     = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title