from django.db import models
from django.db.models import Q
from kifudb.utils import LoggerMixin


class KifuManager(LoggerMixin, models.Manager):

    def search(self, first_player_name, second_player_name, description, group):

        kifu_list = self.all()

        if first_player_name is not None:
            self.logger.debug("Search first player name: " + first_player_name)
            kifu_list = kifu_list.filter(Q(white_player__first_name__icontains=first_player_name) |
                                         Q(white_player__last_name__icontains=first_player_name) |
                                         Q(black_player__first_name__icontains=first_player_name) |
                                         Q(black_player__last_name__icontains=first_player_name))

        if second_player_name is not None:
            self.logger.debug("Search second player name: " + second_player_name)
            kifu_list = kifu_list.filter(Q(white_player__first_name__icontains=second_player_name) |
                                         Q(white_player__last_name__icontains=second_player_name) |
                                         Q(black_player__first_name__icontains=second_player_name) |
                                         Q(black_player__last_name__icontains=second_player_name))

        if group is not None:
            self.logger.debug("Search group name: " + group)
            kifu_list = kifu_list.filter(groups__name__icontains=group)

        if description is not None:
            words = description.split()
            self.logger.debug("Search description: " + words)
            res = list()

            for word in words:
                result = kifu_list.filter()

        return kifu_list
