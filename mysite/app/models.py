from django.db import models


class Resources(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=20)
    health_type = models.CharField(max_length=50)
    resource_type = models.CharField(max_length=50)
    link = models.CharField(max_length=300)
