from django.contrib import admin
from .models import Program, Geral


class ProgramAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


class GeralAdmin(admin.ModelAdmin):
    list_display = ('quemSomos', 'visao','oqueFazemos')


# Register your models here.
admin.site.register(Program, ProgramAdmin)
admin.site.register(Geral, GeralAdmin)