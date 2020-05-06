from django.shortcuts import render
from rest_framework import generics
from ostes.serializers import *
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
# Create your views here.

class OSTCreateView(generics.CreateAPIView):
    serializer_class = OSTDetailSerializer