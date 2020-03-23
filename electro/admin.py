from django.contrib import admin

from .models.product_image import (
    Product, Product_Image
)
from .models.categorie import Categorie

from .models import (

    product_color, product_platform, product_recommended_use,
    product_size, product_terms_condition, brand, product_specification
)

# Register your models here.
admin.site.register(Product)
admin.site.register(Categorie)
admin.site.register(brand.Brand)
admin.site.register(Product_Image)
admin.site.register(product_size.Product_Size)
admin.site.register(product_color.Product_Color)
admin.site.register(product_platform.Product_Platform)
admin.site.register(product_recommended_use.Product_Recommended_Use)
admin.site.register(product_terms_condition.Product_Terms_Condition)
admin.site.register(product_specification.Product_Specification)
