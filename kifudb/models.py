from django.db import models


class KifuGroup(object):
    name = models.CharField(max_length=255)


class Player(object):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    rank = models.CharField(max_length=5)
    birth_date = models.DateField()


class Kifu(object):
    game_text = models.TextField()
    game_date = models.DateField()
    place = models.CharField(max_length=255)
    white_player = models.ForeignKey(Player)
    black_player = models.ForeignKey(Player)
    groups = models.ManyToManyField(KifuGroup)


class Position(object):
    position_text = models.TextField()
    game = models.ForeignKey('Kifu')

