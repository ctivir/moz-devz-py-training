from rest_framework import serializers
from .models import Program, Geral


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('id', 'title', 'description')


class GeralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Geral
        fields = ('id', 'quemSomos', 'visao','oqueFazemos')