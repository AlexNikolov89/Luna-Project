from django.urls import path
from app.restaurants.views import RestaurantListAPIView, RestaurantCreateAPIView, RestaurantRetrieveUpdateDestroyAPIView


urlpatterns = [
    path('', RestaurantListAPIView.as_view()),
    path('new/', RestaurantCreateAPIView.as_view()),
    # path('category/<int:category_id>/', View.as_view()),
    # path('user/<int:user_id>/', View.as_view()),
    path('<int:id>/', RestaurantRetrieveUpdateDestroyAPIView.as_view()),
    # path('toggle-like/<int:id>/', View.as_view()),
    # path('category/list/', View.as_view()),
]
