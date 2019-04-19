from django.db import models
from django.db.models import Q
from kifudb.utils import LoggerMixin


class KifuManager(LoggerMixin, models.Manager):

    def search(self, first_player_name, second_player_name, description, group):
        kifu_list = self.all()

        if first_player_name is not None:
            self.logger.debug("Search first player name: " + first_player_name)
            kifu_list = kifu_list.filter(Q(white_player__name__icontains=first_player_name) |
                                         Q(black_player__name__icontains=first_player_name))
        else:
            self.logger.debug("First player name not set (None)")
        if second_player_name is not None:
            self.logger.debug("Search second player name: " + second_player_name)
            kifu_list = kifu_list.filter(Q(white_player__name__icontains=second_player_name) |
                                         Q(black_player__name__icontains=second_player_name))
        else:
            self.logger.debug("Second player name not set (None)")
        if group is not None and group > -1:
            self.logger.debug("Search group: " + str(group))
            kifu_list = kifu_list.filter(groups__pk=group)

        if description is not None:
            words = description.split()
            # search will be done by matching every word
            for word in words:
                self.logger.debug("Search description: " + word)

            criteria = None

            for word in words:
                self.logger.debug(word)
                if criteria is None:
                    criteria = Q(description__icontains=word) | Q(one_line_description__icontains=word)
                else:
                    criteria = criteria | Q(description__icontains=word) | Q(one_line_description__icontains=word)

            kifu_list = kifu_list.filter(criteria)
        self.logger.info("Games %d ", kifu_list.count())
        return kifu_list


class PlayerManager(LoggerMixin, models.Manager):

    def search(self, name):
        names = name.split()
        self.logger.debug(names)

        if len(names) == 1:
            player_list = self.filter(name__icontains=names[0])
        elif len(names) > 1:
            player_set = set()
            for n in names:
                player_set.update(self.filter(name__icontains=n))
            player_list = list(player_set)
        else:
            player_list = list()

        return player_list
