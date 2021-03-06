"""gosite URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/

Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from kifudb.views import BaseListView, UpdateGameView, GameViewSabaki, SearchView, SearchResultsView, GameNewSabaki, GameInfoView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

import grappelli.urls

urlpatterns = [
    url(r'^$', BaseListView.as_view(), name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^group/(?P<group_name>[\w|-]+)', BaseListView.as_view(), name='game-by-group'),
    url(r'^tag/(?P<tag_name>[\w|-]+)', BaseListView.as_view(), name='game-by-tag'),
    url(r'^game/(?P<kifu_id>\d+)', GameViewSabaki.as_view(), name='game-view-sabaki'),
    url(r'^game-update/', UpdateGameView.as_view(), name='game-update'),
    url(r'^game/new/$', GameNewSabaki.as_view(), name='game-new'),
    url(r'^info/(?P<kifu_id>\d+)$', GameInfoView.as_view(), name='game-info'),
    url(r'^search/$', SearchResultsView.as_view(), name='search-page'),
    url(r'^search-results/(?P<fp>\w{0,50})/(?P<sp>\w{0,50})/(?P<g>\-?\w{0,50})/(?P<d>\w{0,50})$', SearchResultsView.as_view(), name='search-results'),
    url(r'^admin_tools/', include('admin_tools.urls')),
    url(r'^accounts/login/', auth_views.login, name='login'),
    url(r'rest/', include('rest_gosite.urls', namespace='rest'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + grappelli.urls.urlpatterns
