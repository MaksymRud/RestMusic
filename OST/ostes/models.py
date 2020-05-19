from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class OST(models.Model):
    name = models.CharField(max_length = 100, unique = True)

    def __str__(self):
        return self.name

    class Meta:
        managed = True

class Movie(models.Model):
    name = models.CharField(max_length = 100, unique=True)
    num_seasons = models.IntegerField(blank=True)
    descr = models.CharField(max_length=2000, blank=True, null=True)
    ost = models.OneToOneField(OST, on_delete=models.CASCADE)

    categories = models.ManyToManyField(
        'Category',
        through='MoviehasCategories',
        through_fields=('movie', 'category')
    )

    def __str__(self):
        return self.name
    
    class Meta:
        managed = True
        unique_together = (('name', 'ost'),)
    

class Season(models.Model):
    name = models.CharField(max_length = 100)
    number = models.IntegerField()
    descr = models.CharField(max_length=2000, blank=True, null=True)
    num_episodes = models.IntegerField()
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    class Meta:
        managed = True
        unique_together = (('id', 'movie'),)

class Episode(models.Model):
    name = models.CharField(max_length = 100)
    descr = models.CharField(max_length=1000, blank=True, null=True)
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    music = models.ManyToManyField(
        'Music', 
        through='EpisodeMusic',
        through_fields=('episode', 'music')
    )

    def __str__(self):
        return self.name
    
    class Meta:
        managed = True
        unique_together = (('id', 'season'),)

class Music(models.Model):
    name = models.CharField(max_length = 100)
    audio = models.FileField(upload_to='music/%Y/%m/%d/')
    ost = models.ForeignKey(OST, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    class Meta:
        managed = True
        unique_together = (('id', 'ost'),)
    
class EpisodeMusic(models.Model):
    music = models.ForeignKey(
        Music, 
        on_delete=models.CASCADE
    )

    episode = models.ForeignKey(
        Episode,
         on_delete=models.CASCADE
    )

    class Meta:
        managed = True
        unique_together = (('music', 'episode'),)

class Category(models.Model):
    name = models.CharField(max_length = 50, unique=True)
    
    movies = models.ManyToManyField(
        Movie, 
        through='MoviehasCategories', 
        through_fields=('category', 'movie')
    )

    def __str__(self):
        return self.name

class MoviehasCategories(models.Model):
    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE,
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )

    class Meta:
        managed = True
        unique_together = (('category', 'movie'),)


class Video_Preview(models.Model):
    preview = models.URLField(max_length=200)
    movie = models.OneToOneField(Movie, on_delete=models.CASCADE)

    


    
    

