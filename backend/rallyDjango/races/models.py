from django.db import models

# Create your models here.
class Car(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    color = models.CharField(max_length=100, blank=True, null=True)
    price = models.IntegerField(null=True)
    description = models.TextField(blank=True, null=True)
    photo = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"

class Driver(models.Model):
    name = models.CharField(max_length=100)
    birthDate = models.DateField
    nationality = models.CharField(max_length=100)
    car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True, related_name="drivers")
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.nationality}"

class Venue(models.Model):
    placeName = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    location = models.CharField(max_length=150)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.country}: {self.placeName}"

class Race(models.Model):
    name = models.CharField(max_length=150)
    date = models.DateField()
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name="races")
    drivers = models.ManyToManyField(Driver, related_name="races")
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} at {self.venue.placeName} on {self.date}"