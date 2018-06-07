from django.views.generic import ListView, DetailView, TemplateView
from kifudb.models import Kifu, KifuGroup


class LastGamesView(TemplateView):
    template_name = "front.html"

    def get_context_data(self, **kwargs):
        context = super(LastGamesView, self).get_context_data(**kwargs)
        blog_posts = Kifu.objects.all()
        groups = KifuGroup.objects.all()
        context['KIFUS'] = blog_posts
        context['GROUPS'] = groups
        return context


class GameView(DetailView):
    template_name = "game_view.html"
    model = Kifu



class FrontPageView(TemplateView):
    template_name = "front.html"

    def get_context_data(self, **kwargs):
        context = super(FrontPageView, self).get_context_data(**kwargs)
        blog_posts = Kifu.objects.all()
        groups = KifuGroup.objects.all()
        context['KIFUS'] = blog_posts
        context['GROUPS'] = groups
        return context


class TestGameView(TemplateView):
    template_name = "game_view.html"