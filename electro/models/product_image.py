from django.db import models
from .product import Product
from django.template.defaultfilters import slugify

def get_image_filename(instance , filename):
    title = instance.product.title
    slug  = slugify(title)
    return "product/%s/%s" %(slug , filename)

class Product_Image(models.Model):
    product     = models.ForeignKey(Product , on_delete=models.CASCADE)
    image       = models.ImageField(upload_to=get_image_filename)
    publish     = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.title