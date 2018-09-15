from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    # return HttpResponse('<h1>Hi</h1>')
    return render(request, 'templates/index.html')


# from django.http import HttpResponse
# from django.shortcuts import render
#
# def my_view(request):
#     #return HttpResponse('<h1>Hello LumoHacks!</h1>')
#
