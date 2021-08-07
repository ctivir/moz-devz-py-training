from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProgramSerializer, GeralSerializer, EmbassadorSerializer
from .models import Program, Geral, Embassador

# Create your views here.


class ProgramView(viewsets.ModelViewSet):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()


class GeralView(viewsets.ModelViewSet):
    serializer_class = GeralSerializer
    queryset = Geral.objects.all()


class EmbassadorView(viewsets.ModelViewSet):
    serializer_class = EmbassadorSerializer
    queryset = Embassador.objects.all()