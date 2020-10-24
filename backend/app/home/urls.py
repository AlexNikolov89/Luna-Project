from django.urls import path
from app.home.views import ListBestRestaurantsView

urlpatterns = [
    path('', ListBestRestaurantsView.as_view()),
]