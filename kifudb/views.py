from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from kifudb.models import Kifu, KifuGroup
from django.views import View
from django.http import HttpResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from kifudb.utils import LoggerMixin
from kifudb.forms import SearchForm


def load_games(load_type=None):
    if load_type is None:
        # load last 20 games for the front page
        return Kifu.objects.all()[:20]
    elif load_type[0] == 'Group':
        print("loading games from " + load_type[1])
        return Kifu.objects.filter(groups__slug = load_type[1])
    elif load_type[0] == 'Tag':
        print("loading games with tag " + load_type[1])
        return Kifu.objects.filter(tag__slug = load_type[1])


class BaseListView(LoggerMixin, TemplateView):
    template_name = "front.html"

    def get_context_data(self, **kwargs):
        context = super(BaseListView, self).get_context_data(**kwargs)
        kifus = []
        if not self.kwargs:
            kifus = load_games()
        if 'group_name' in self.kwargs:
            kifus = load_games(('Group', self.kwargs['group_name']))
        if 'tag_name' in self.kwargs:
            kifus = load_games(('Tag', self.kwargs['tag_name']))

        self.logger.debug("Found " + str(len(kifus)) + " games")
        context['KIFUS'] = kifus
        groups = KifuGroup.objects.all()
        context['GROUPS'] = groups

        return context


class GameViewSabaki(LoggerMixin, LoginRequiredMixin, TemplateView):
    template_name = "game_view_sabaki.html"

    def get_context_data(self, **kwargs):
        context = super(GameViewSabaki, self).get_context_data(**kwargs)
        self.logger.debug("Request path: " + self.request.path)
        if self.request.path == "/game/new/":
            game = Kifu()
            game.save()
            kifu_id = game.id
            context['GAME_ID'] = kifu_id
            self.logger.debug("new game loaded");
        else:
            kifu_id = kwargs['kifu_id']
            game = Kifu.objects.get(pk=int(kifu_id))
            t = game.game_text
            t = t.replace('\r', '')
            t = t.replace('\n', '')
            game.game_text = t
            context['GAME_ID'] = kifu_id
            context['GAME'] = game
            self.logger.debug("game with id " + kifu_id + " loaded")
        return context


class UpdateGameView(LoggerMixin, View):

    def post(self, request, *args, **kwargs):
        kifu_id = request.POST['game_id']
        self.logger.debug("Game update: " + kifu_id)
        sgf = request.POST['game_text']
        kifu = Kifu.objects.get(pk=int(kifu_id))
        kifu.game_text = sgf
        kifu.save()
        self.logger.debug("game saved")
        return HttpResponse('')


class SearchView(LoggerMixin, TemplateView):
    template_name = "search.html"

    def get_context_data(self, **kwargs):
        self.logger.debug("SearchView")
        context = super(SearchView, self).get_context_data(**kwargs)
        groups = KifuGroup.objects.all()
        context['GROUPS'] = groups
        return context


class SearchResultsView(FormView, LoggerMixin):
    template_name = "search.html"
    form_class = SearchForm
    success_url = "/search/"

    def get_context_data(self, **kwargs):
        self.logger.debug("get_context_data")
        context = super(SearchResultsView, self).get_context_data(**kwargs)
        groups = KifuGroup.objects.all()
        context['GROUPS'] = groups
        return context

    def form_valid(self, form):
        self.logger.debug(form.data)

        return super(SearchResultsView, self).form_valid(form)
