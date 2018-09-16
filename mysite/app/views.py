from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Resources


# Create your views here.
def index(request):
    return render(request, 'index.html')


def authenticate_user(request):
    username = request.POST.get("username", None)
    password = request.POST.get("password", None)
    user = authenticate(username=username, password=password)
    if user:
        login(request, user)
    if not user:
        messages.add_message(request, messages.ERROR, "Incorrect username or password.")
    return redirect('/')


def register_user(request):
    username = request.POST.get("username", None)
    email = request.POST.get("email", None)
    password = request.POST.get("password", None)
    password_confirm = request.POST.get("password_confirm", None)
    if User.objects.filter(username=username).exists():
        messages.add_message(request, messages.ERROR, "This username already exists.")
    elif User.objects.filter(email=email).exists():
        messages.add_message(request, messages.ERROR, "This email is already registered.")
    elif password != password_confirm:
        messages.add_message(request, messages.ERROR, "Your passwords do not match.")
    else:
        messages.add_message(request, messages.INFO, "Succesfully registered!")
        user = User.objects.create_user(username, email, password)
        user.save()
    return redirect('/')


def logout_user(request):
    logout(request)
    return redirect('/')


def search(request):
    query = request.POST.get("handle", None)
    query = query.replace(" ", "+")
    return redirect("https://www.google.com/search?q=%s" % query)


def websites(request):
    websites = Resources.objects.filter(resource_type="website")
    websites_dict = {}
    for index, website in enumerate(websites):
        info = {}
        info['name'] = website.name
        info['address'] = website.address
        info['city'] = website.city
        info['state'] = website.state
        info['country'] = website.country
        info['phone_no'] = website.phone_no
        info['health_type'] = website.health_type
        info['resource_type'] = website.resource_type
        info['link'] = website.link
        websites_dict[index] = info
    return render(request, 'websites.html', {'websites_dict': websites_dict})


def clinics(request):
    return render(request, 'clinics.html')


def call_centres(request):
    centres = Resources.objects.filter(resource_type="call-center")
    centres_dict = {}
    for index,centre in enumerate(centres):
        info = {}
        info['name'] = centre.name
        info['address'] = centre.address
        info['city'] = centre.city
        info['state'] = centre.state
        info['country'] = centre.country
        info['phone_no'] = centre.phone_no
        info['health_type'] = centre.health_type
        info['resource_type'] = centre.resource_type
        info['link'] = centre.link
        centres_dict[index] = info
    return render(request, 'call-centres.html', {'centres_dict': centres_dict})


def about(request):
    return render(request, 'about.html')

def settings(request):
    return render(request, 'settings.html')
