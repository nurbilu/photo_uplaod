from django.contrib import admin
from django.urls import path

from base import views

urlpatterns = [
    path('', views.index),
    path('get_all_images', views.getImages),
    path('upload_image/',views.APIViews.as_view()),
    # path('delete_image/',views.deleteImage,name='delete_image'),
    # path('update_image/',views.updateImage,name='update_image'),

]