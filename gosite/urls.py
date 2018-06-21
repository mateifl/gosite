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
from kifudb.views import BaseListView, GameView, GameViewSabaki
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r'^$', BaseListView.as_view(), name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^group/(?P<group_name>[\w|-]+)', BaseListView.as_view(), name='game-by-group'),
    url(r'^tag/(?P<tag_name>[\w|-]+)', BaseListView.as_view(), name='game-by-tag'),
    # url(r'^game/(?P<kifu_id>\d+)', GameView.as_view(), name='game-view'),
    url(r'^game/(?P<kifu_id>\d+)', GameViewSabaki.as_view(), name='game-view-sabaki'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
