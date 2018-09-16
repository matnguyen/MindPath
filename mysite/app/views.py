from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


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


def apps(request):
    return render(request, 'apps.html')


def clinics(request):
    return render(request, 'clinics.html')


def call_centres(request):
    return render(request, 'call-centres.html')


def about(request):
    return render(request, 'about.html')
