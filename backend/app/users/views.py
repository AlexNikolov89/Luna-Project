from django.contrib.auth.models import User
from django_filters.rest_framework import filters

from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView

from backend.app.users.serializers import UserSerializer


# get and update my user profile
class MyUserProfile(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_object(self):
        self.kwargs['pk'] = self.request.user.id
        obj = super().get_object()
        return obj.user_profile


# list all users
class ListUsers(ListAPIView):
    permission_classes = []
    authentication_classes = []

    serializer_class = UserSerializer
    queryset = User.objects.all()


# retrieve any user profile
class GetAnyUserProfile(ListAPIView):
    permission_classes = []
    authentication_classes = []

    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        return self.queryset.filter(id=self.kwargs.get('pk'))


# search for a user by string input
class SearchUser(ListAPIView):
    permission_classes = []
    authentication_classes = []

    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ('username', 'last_name', 'first_name', 'email')
