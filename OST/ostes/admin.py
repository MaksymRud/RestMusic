from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

from .models import *

admin.site.register(OST)
admin.site.register(Movie)
admin.site.register(Season)
admin.site.register(Episode)
admin.site.register(Music)
admin.site.register(EpisodeMusic)
admin.site.register(Category)
admin.site.register(MoviehasCategories)
admin.site.register(Video_Preview)

