from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from kifudb.models import Kifu, KifuGroup, KifuInfo
from django.views import View
from django.http import HttpResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse
from kifudb.utils import LoggerMixin
from kifudb.forms import SearchForm
from kifudb.utils import check_string_has_value_dict, string_to_none


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


class GameNewSabaki(LoggerMixin, LoginRequiredMixin, TemplateView):
    template_name = "game_view_sabaki.html"

    def get_context_data(self, **kwargs):
        context = super(GameViewSabaki, self).get_context_data(**kwargs)
        self.logger.debug("Request path: " + self.request.path)
        game = Kifu()
        game.save()
        kifu_id = game.id
        context['GAME_ID'] = kifu_id
        self.logger.debug("new game loaded");
        return context


class GameViewSabaki(LoggerMixin, TemplateView):
    template_name = "game_view_sabaki.html"

    def get_context_data(self, **kwargs):
        context = super(GameViewSabaki, self).get_context_data(**kwargs)
        self.logger.debug("Request path: " + self.request.path)

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


class UpdateGameView(LoggerMixin, LoginRequiredMixin, View):

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

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        if form.is_valid():
            print("POST")
            return self.form_valid(form, **kwargs)
        else:
            return self.form_invalid(form)

    def get_context_data(self, **kwargs):
        self.logger.debug("SearchResultsView.get_context_data")
        context = super(SearchResultsView, self).get_context_data(**kwargs)
        groups = KifuGroup.objects.all()
        context['GROUPS'] = groups

        if "fp" not in self.kwargs and "sp" not in self.kwargs and "g" not in self.kwargs and "d" not in self.kwargs:
            return context

        first_player = string_to_none(check_string_has_value_dict(self.kwargs, "fp"))
        second_player = string_to_none(check_string_has_value_dict(self.kwargs, "sp"))
        group_id = None
        if "g" in self.kwargs.keys() and self.kwargs["g"] != "x":
            group_id = int(self.kwargs["g"])
        description = string_to_none(check_string_has_value_dict(self.kwargs, "d"))
        print(first_player, second_player, group_id, description)
        kifus = Kifu.objects.search(first_player, second_player, description, group_id)

        context['GAMES'] = kifus
        return context

    def form_valid(self, form, **kwargs):
        self.logger.debug("Search parameters: ")
        self.logger.debug(form.cleaned_data)

        first_player = check_string_has_value_dict(form.cleaned_data, "first_player")
        second_player = check_string_has_value_dict(form.cleaned_data, "second_player")

        group = "x"
        if 'group' in form.cleaned_data.keys():
            group = form.cleaned_data['group']

        description = check_string_has_value_dict(form.cleaned_data, "description")

        self.success_url = reverse('search-results', args=[first_player, second_player, group, description])
        self.logger.debug("Search url: " + self.success_url)
        return super(SearchResultsView, self).form_valid(form)


class GameInfoView(LoggerMixin, TemplateView):
    template_name = "game_info.html"

    def get_context_data(self, **kwargs):
        self.logger.debug("GameInfoView")
        context = super(GameInfoView, self).get_context_data(**kwargs)
        kifu_id = kwargs['kifu_id']
        self.logger.debug("kifu_id = " + kifu_id)
        try:
            game_info = KifuInfo.objects.filter(game__pk=int(kifu_id))
            
            self.logger.debug("Game info found " + game_info[0].id)
        except:
            self.logger.warning("Game info for " + kifu_id)
            game = Kifu.objects.get(pk=int(kifu_id))
            game_info = KifuInfo(game=game)
            game_info.save()
        context['kifu_info'] = game_info
        return context