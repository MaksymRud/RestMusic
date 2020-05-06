from rest_framework import serializers
from ostes.models import *


class OSTDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OST
        fields = '__all__'
