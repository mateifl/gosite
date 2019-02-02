from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rest_gosite import views

urlpatterns = [
    url(r'kifu/$', views.KifuListRestView.as_view()),
    url(r'kifu/<int:pk>/', views.KifuRestView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
