from django.urls import path
from app.reviews.views.reviews import
from app.social.views.comments import


review_patterns = [
    path('new/<int:restaurant_id>/', View.as_view()),
    path('restaurant/<int:restaurant_id>/', View.as_view()),
    path('user/<int:user_id>/', View.as_view()),
    path('<int:review_id>/', View.as_view()),
    path('like/<int:review_id>/', View.as_view()),
    path('like/<int:review_id>/', View.as_view()),
    path('likes/', View.as_view()),
    path('comments/', View.as_view()),

]

comment_patterns = [
    path('<int:user_id>/', View.as_view()),
    path('new/<int:review_id>/', View.as_view()),
    path('<int:comment_id>/', View.as_view()),
]


urlpatterns = [
    path('reviews/', include(review_patterns)),
    path('review/comment/', include(comment_patterns)),

]
