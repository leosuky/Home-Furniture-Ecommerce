from django.urls import path
from ..views.order_views import *


urlpatterns = [
    path('add/', addOrderItems, name='orders-add'),
]