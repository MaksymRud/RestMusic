from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from ostes.views import *

router = routers.SimpleRouter()
router.register(r'ost', OSTViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'movie', MovieViewSet)
router.register(r'season', SeasonViewSet)
router.register(r'episode', EpisodeViewSet)
router.register(r'music', MusicViewSet)

app_name = 'ost'
urlpatterns = []

urlpatterns += router.urls


