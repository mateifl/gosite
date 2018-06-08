"""gosite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from kifudb.views import FrontPageView, TestGameView, BaseListView

urlpatterns = [
    url(r'^$', BaseListView.as_view(), name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^test-game-view/', TestGameView.as_view(), name='test-game-view'),
    url(r'^group/(?P<group_name>[\w|-]+)', BaseListView.as_view(), name='game-by-group'),
    url(r'^tag/(?P<tag_name>[\w|-]+)', BaseListView.as_view(), name='game-by-tag')
]
