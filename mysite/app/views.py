from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def apps(request):
    return render(request, 'apps.html')

def clinics(request):
    return render(request, 'clinics.html')

def call_centres(request):
    return render(request, 'call-centres.html')

def about(request):
    return render(request, 'about.html')
