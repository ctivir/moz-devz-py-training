from django.db import models


# Create your models here.
class Program(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()

    def _str_(self):
        return self.title


class Geral(models.Model):
    quemSomos = models.CharField(max_length=250)
    visao = models.CharField(max_length=250)
    oqueFazemos = models.CharField(max_length=250)
    logo = models.CharField(max_length=250)

    def __str__(self):
        return self.quemSomos


class Embassador(models.Model):
    name = models.CharField(max_length=250)
    site = models.CharField(max_length=250)
    logo = models.CharField(max_length=250)

    def __str__(self):
        return self.name