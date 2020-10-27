from rest_framework.exceptions import NotFound
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from app.reviews.models import Comments_on_reviews, RestaurantReview, CommentLikes
from app.reviews.serializers import CommentsSerializer


# list of user review's comments
class UserComments(ListAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()

    def get_queryset(self):
        return self.queryset.filter(comment_owner__id=self.kwargs.get('pk'))


# making a new comment
class CreateReviewsComments(CreateAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()

    def get_object(self):
        try:
            return RestaurantReview.objects.get(pk=self.kwargs.get('pk'))
        except RestaurantReview.DoesNotExist:
            raise NotFound('Review not found')

    def perform_create(self, serializer):
        serializer.save(restaurant_review=self.get_object(), comment_owner=self.request.user)


# delete a comment
class DeleteReviewsComments(DestroyAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()

    def get_queryset(self):
        return self.queryset.filter(id=self.kwargs.get('pk'))


# Like and Remove a Like  from a review comment
class LikeOrUnLikeComment(RetrieveUpdateDestroyAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()

    def post(self, request, pk, **kwargs):
        self.get_object()
        like, created = CommentLikes.objects.get_or_create(comment_like_owner=self.request.user)
        return Response('Liked')

    def delete(self, request, *args, **kwargs):
        self.get_object()
        try:
            like, created = CommentLikes.objects.get(comment_like_owner=self.request.user).delete()
        except CommentLikes.DoesNotExist:
            return Response({'you cant Unlike twice'}, 400)
        return Response('Unliked')
