from rest_framework import serializers
from ostes.models import *


class OSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = OST
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
    ost = OSTSerializer(required = True)
    categories = CategorySerializer(required = True, many = True)

    class Meta:
        model = Movie
        fields = '__all__'

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'


class MusicSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Music
        fields = '__all__'


class EpisodeSerializer(serializers.ModelSerializer):
    music = MusicSerializer(many = True)

    class Meta:
        model = Episode
        fields = '__all__'


class Video_PreviewSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(required = True)

    class Meta:
        model = Video_Preview
        fields = '__all__'

class EpisodeMusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = EpisodeMusic
        fields = '__all__'

class MoviehasCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoviehasCategories
        fields = '__all__'
