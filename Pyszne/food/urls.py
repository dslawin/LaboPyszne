from django.urls import path

from . import views

app_name = 'food'

urlpatterns = [
    path('pizza', views.pizza,name='pizza'),
    path('burgery', views.burgery,name='burgery'),
]