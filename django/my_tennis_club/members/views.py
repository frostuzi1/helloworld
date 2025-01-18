from django.shortcuts import render
from django.http import HttpResponse

def members(request):
    return HttpResponse("Hello world!")
def product(request, product_name):
    return HttpResponse(f"You are viewing: {product_name}")