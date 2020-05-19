from django.shortcuts import render
from rest_framework import generics
from ostes.serializers import *
from rest_framework import status, viewsets
from ostes.models import * 
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
# Create your views here.

class OSTViewSet(viewsets.ModelViewSet):
    serializer_class = OSTSerializer
    queryset = OST.objects.all()

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()

class SeasonViewSet(viewsets.ModelViewSet):
    serializer_class = SeasonSerializer
    queryset = Season.objects.all()

class EpisodeViewSet(viewsets.ModelViewSet):
    serializer_class = EpisodeSerializer
    queryset = Episode.objects.all()

class MusicViewSet(viewsets.ModelViewSet):
    serializer_class = MusicSerializer
    queryset = Music.objects.all()

class Video_PreviewViewSet(viewsets.ModelViewSet):
    serializer_class = Video_PreviewSerializer
    queryset = Video_Preview.objects.all()

