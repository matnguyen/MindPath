from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def search(request):
    query = request.POST.get("handle", None)
    query = query.replace(" ", "+")
    return redirect("https://www.google.com/search?q=%s" % query)

def apps(request):
    return render(request, 'apps.html')

def clinics(request):
    return render(request, 'clinics.html')

def call_centres(request):
    return render(request, 'call-centres.html')

def about(request):
    return render(request, 'about.html')
