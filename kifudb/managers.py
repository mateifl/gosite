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

        return kifu_list


class PlayerManager(LoggerMixin, models.Manager):

    def search(self, name):
        names = name.split()
        self.logger.debug(names)

        if len(names) == 1:
            player_list = self.filter(last_name__istartswith=names[0])
        else:
            player_list = self.filter(first_name__istartswith=names[0]).filter(last_name__istartswith=names[1])

        return player_list

    def create_player(self, name):
        names = name.split()
        if len(names) == 1:
            player = self.create(last_name=names[0])
        else:
            player = self.create(first_name=names[0], last_name=names[1])
        player.save()
        return player
