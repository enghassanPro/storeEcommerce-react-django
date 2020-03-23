from django.conf.urls import url
from .views.products.create import CreateProduct
from .views.products.update import UpdateProduct
from .views.products.delete import DeleteProduct


app_name = "electro"

urlpatterns = [
    url(r'^product/create$', CreateProduct.as_view()),
    url(r'^product/update/(?P<pk>[0-9]+)$', UpdateProduct.as_view()),
    url(r'^product/delete/(?P<pk>[0-9]+)$', DeleteProduct.as_view()),
    # url(r'^product/update/change$', UpdateProduct.as_view()),
    # url(r'^product/create'),
    # url(r'^product/update'),
    # url(r'^product/delete'),
]
