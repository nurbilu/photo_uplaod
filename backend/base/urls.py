from django.contrib import admin
from django.urls import path

from base import views

urlpatterns = [
    path('', views.index),
    path('get_all_images', views.getImages),
    path('upload_image/',views.APIViews.as_view()),
    path('delete_image/<int:id>/', views.APIViews.as_view(), name='delete_image'),
    path('update_image/<int:id>/', views.APIViews.as_view(), name='update_image'),


]