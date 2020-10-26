from django.conf import settings
from django.db import models


class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    category = models.TextField()
    # country = CountryField(blank_label='(select country)')
    street = models.TextField(max_length=100)
    city = models.TextField(max_length=100)
    zip = models.TextField(max_length=10)
    website = models.TextField(
        verbose_name='website',
        max_length=150,
        blank=True,
        null=True,
    )
    phone = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)



    # oneToMany
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='posts', on_delete=models.CASCADE)
    # ManyToMany
    liked_by = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='liked_posts', verbose_name='liked by', blank=True)

    def __str__(self):
        title = f'{self.title[:30]}...' if len(self.title) > 30 else self.title
        return f'Restaurant {self.pk}: {name} in the category of {category}'