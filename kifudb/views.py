from django.shortcuts import render
from django.views.generic import ListView, DetailView
from kifudb.models import Kifu
# Create your views here.

class LastGamesView(ListView):
    template_name = "last_games.html"

    def get_queryset(self):
        # add the last 10 games here
        pass


class GameView(DetailView):
    template_name = "view_game.html"
    model = Kifu
