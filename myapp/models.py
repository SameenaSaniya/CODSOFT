from django.db import models
from django.utils import timezone


# Create your models here.
class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    status = models.BooleanField(default=False)
    created_at = models.DateField(default=timezone.now().date())
