from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),  # For the base URL
    path('members/<str:product_name>/', views.product, name='product'),  # Dynamic URL
]
