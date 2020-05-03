from rest_framework import serializers
from ostes.models import OST

class OSTDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OST
        fields = '__all__'
