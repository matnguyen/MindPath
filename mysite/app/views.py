from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout


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
