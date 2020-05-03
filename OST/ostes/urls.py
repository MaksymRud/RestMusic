from django.contrib import admin
from django.urls import path, include
from ostes.views import *

app_name = 'ost'
urlpatterns = [
    path('ost/create/', OSTCreateView.as_view())
]
