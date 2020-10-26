from django.conf import settings
from django.db import models
from django_countries.fields import CountryField


def restaurant_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/name/<filename>
    return f'{instance.name}/{filename}'


class Restaurant(models.Model):
    Price_levels = [
        (1, '$1-$10'),
        (2, '$11-$30'),
        (3, '$30-$50'),
    ]

    Noise_levels = [
        (1, 'quiet'),
        (2, 'comfort'),
        (3, 'noisy'),
    ]

    name = models.CharField(max_length=50)
    category = models.CharField()
    country = CountryField(blank_label='(select country)')
    street = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    zip = models.charField(max_length=10)
    website = models.TextField(
        verbose_name='website',
        max_length=150,
        blank=True,
        null=True,
    )
    phone = models.TextField(max_length=100)
    email = models.EmailField(unique=True)
    opening_hours = models.TextField(max_length=100)
    price_level = models.IntegerField(max_length=1, choices=Price_levels)
    image = models.ImageField(blank=True, null=True, upload_to='restaurant_directory_path')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_owner = models.BooleanField(verbose_name='owner', default=False)
    reservations = models.BooleanField(default=False)
    delivery = models.BooleanField(default=False)
    take_away = models.BooleanField(default=False)
    credit_cards = models.BooleanField(default=False)
    wifi = models.BooleanField(default=False)
    noise_level = models.IntegerField(max_length=1, choices=Noise_levels)
    waiter_service = models.BooleanField(default=False)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='restaurants', on_delete=models.CASCADE)

    def __str__(self):
        title = f'{self.title[:30]}...' if len(self.title) > 30 else self.title
        return f'Restaurant {self.pk}: {name} in the category of {category}'