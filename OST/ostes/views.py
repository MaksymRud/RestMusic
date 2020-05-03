from django.shortcuts import render
from rest_framework import generics
from ostes.serializers import OSTDetailSerializer
# Create your views here.

class OSTCreateView(generics.CreateAPIView):
    serializer_class = OSTDetailSerializer