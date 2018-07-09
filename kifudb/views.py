from django.views.generic import ListView, DetailView, TemplateView
from kifudb.models import Kifu, KifuGroup
from django.views import View
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.mixins import LoginRequiredMixin


def load_games(load_type = None):
    if load_type is None:
        # load last 20 games for the front page
        return Kifu.objects.all()
    elif load_type[0] == 'Group':
        print("loading games from " + load_type[1])
        return Kifu.objects.filter(groups__slug = load_type[1])
    elif load_type[0] == 'Tag':
        print("loading games with tag " + load_type[1])
        return Kifu.objects.filter(tag__slug = load_type[1])


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

        print("Found " + str(len(kifus)) + " games")
        context['KIFUS'] = kifus

        groups = KifuGroup.objects.all()
        context['GROUPS'] = groups

        return context


class GameView(LoginRequiredMixin, TemplateView):
    template_name = "game_view.html"
    model = Kifu

    def get_context_data(self, **kwargs):
        context = super(GameView, self).get_context_data(**kwargs)
        kifu_id = kwargs['kifu_id']
        print("Kifu id = " + kifu_id)
        game = Kifu.objects.get(pk= int(kifu_id))
        context['GAME'] = game
        return context


class GameViewSabaki(LoginRequiredMixin, TemplateView):
    template_name = "game_view_sabaki.html"

    def get_context_data(self, **kwargs):
        context = super(GameViewSabaki, self).get_context_data(**kwargs)
        # if 'kifu_id' in kwargs:
        #     print(kwargs['kifu_id'])
        # else:
        #     print("game id not found")

        print(self.request.path)
        if self.request.path == "/game/new/":
            game = Kifu()
            game.save()
            kifu_id = game.id
            context['GAME_ID'] = kifu_id
        else:
            kifu_id = kwargs['kifu_id']
            # print("Kifu id = " + kifu_id)
            game = Kifu.objects.get(pk = int(kifu_id))
            t = game.game_text
            t = t.replace('\r', '')
            t = t.replace('\n', '')
            game.game_text = t
            context['GAME_ID'] = kifu_id
            context['GAME'] = game
        return context


class UpdateGameView(View):

    def post(self, request, *args, **kwargs):
        kifu_id = request.POST['game_id']
        sgf = request.POST['game_text']
        kifu = Kifu.objects.get(pk=int(kifu_id))
        kifu.game_text = sgf
        kifu.save()
        return HttpResponse('')


class SearchView(TemplateView):
    template_name = "search.html"

    def get_context_data(self, **kwargs):
        context = super(SearchView, self).get_context_data(**kwargs)

        return context
