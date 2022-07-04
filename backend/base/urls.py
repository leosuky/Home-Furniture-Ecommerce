from django.urls import path
from .views import *

urlpatterns = [
    path('shop/products/', getProducts, name='products'),
    path('shop/products/<str:pk>/', getProduct, name='product'),
]