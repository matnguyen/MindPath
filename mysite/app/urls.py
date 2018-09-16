from django.urls import path

from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.search, name='search'),
    path('authenticate_user', views.authenticate_user, name='authenticate_user'),
    path('logout_user', views.logout_user, name='logout_user'),
    path('register_user', views.register_user, name='register_user'),
    path('websites', views.websites, name='websites'),
    path('clinics', views.clinics, name='clinics'),
    path('call_centres', views.call_centres, name='call_centres'),
    path('about', views.about, name='about'),
    path('settings', views.settings, name='settings'),
    path('index', views.index, name='index'),
    path('change_color', views.change_color, name='change_color'),
]
