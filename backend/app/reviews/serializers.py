from rest_framework import serializers

from app.reviews.models import RestaurantReview, Comments_on_reviews


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ['id', 'restaurant_review', 'content', 'review_owner', 'likes', 'created', 'rating']
        depth = 1


class CommentsSerializer(serializers.ModelSerializer):
    restaurant_review = ReviewSerializer(read_only=True)

    class Meta:
        model = Comments_on_reviews
        fields = ['id', 'content', 'created', 'modified', 'comment_owner', 'restaurant_review',
                  'comment_likes']
        read_only_fields = ['id', 'created', 'comment_likes', 'modified']
