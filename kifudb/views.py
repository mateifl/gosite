from django.views.generic import ListView, DetailView, TemplateView
from kifudb.models import Kifu, KifuGroup


def load_games(load_type = None):
    if load_type is None:
        # load last 20 games for the front page
        return Kifu.objects.all()[:20]
    elif load_type[0] == 'Group':
        print("loading games from " + load_type[1])
        return Kifu.objects.filter(groups__name = load_type[1])
    elif load_type[0] == 'Tag':
        print("loading games with tag " + load_type[1])
        return Kifu.objects.filter(tag__name = load_type[1])


class BaseListView(TemplateView):
    template_name = "front.html"

    def get_context_data(self, **kwargs):
        context = super(BaseListView, self).get_context_data(**kwargs)
        print(self.kwargs)
        kifus = []
        if not self.kwargs:
            kifus = load_games()
        if 'group_name' in self.kwargs:
            kifus = load_games(('Group', self.kwargs['group_name']))
        if 'tag_name' in self.kwargs:
            kifus = load_games(('Tag', self.kwargs['tag_name']))
        context['KIFUS'] = kifus

        groups = KifuGroup.objects.all()
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

