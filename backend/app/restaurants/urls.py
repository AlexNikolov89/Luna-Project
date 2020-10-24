from django.urls import path
from app.restaurants.views import


urlpatterns = [
    path('', View.as_view()),
    path('new/', View.as_view()),
    path('category/<int:category_id>/', View.as_view()),
    path('user/<int:user_id>/', View.as_view()),
    path('/<int:id>/', View.as_view()),
    path('toggle-like/<int:id>/', View.as_view()),
    path('category/list/', View.as_view()),
]
