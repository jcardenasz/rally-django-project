from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarViewSet, DriverViewSet, VenueViewSet, RaceViewSet

router = DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'drivers', DriverViewSet)
router.register(r'venues', VenueViewSet)
router.register(r'races', RaceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
