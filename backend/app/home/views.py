from rest_framework.generics import ListAPIView

from app.restaurants.models import Restaurant
from app.restaurants.serializers import RestaurantSerializer


class HomeView(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get_queryset(self):
        restaurants = Restaurant.objects.all()
        top_rated_restaurants = sorted(restaurants, key=lambda restaurant: restaurant.average_rating, reverse=True)[:4]
        return top_rated_restaurants

