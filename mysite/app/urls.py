from django.urls import path

from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.search, name='search'),
    path('apps', views.apps, name='apps'),
    path('clinics', views.clinics, name='clinics'),
    path('call_centres', views.call_centres, name='call_centres'),
    path('about', views.about, name='about'),
]
