from rest_framework import serializers

from app.restaurants.models import Restaurant
from app.users.serializers import UserSerializer
from django.db.models import Avg


class RestaurantSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        required=False,
        read_only=True
    )  # show the details of the author

    # average_ratings = serializers.SerializerMethodField()
    #
    # def get_average_ratings(self, obj):
    #     average = Reviews.ratings.all().aggregate(Avg('ratings')).get('scores__avg')
    #
    #     if average is None:
    #         return 0
    #     return average

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['author']
