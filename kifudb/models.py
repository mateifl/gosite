from django.db import models


class KifuGroup(models.Model):
    name = models.CharField(max_length=255)


class Player(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    rank = models.CharField(max_length=5)
    birth_date = models.DateField()


class Kifu(models.Model):
    game_text = models.TextField()
    game_date = models.DateField()
    place = models.CharField(max_length=255)
    white_player = models.ForeignKey(Player, related_name="white")
    black_player = models.ForeignKey(Player, related_name="black")
    groups = models.ManyToManyField(KifuGroup)
    description = models.TextField()


class Position(models.Model):
    position_text = models.TextField()
    game = models.ForeignKey('Kifu')


class KifuComment(models.Model):
    kifu = models.ForeignKey(Kifu)
    move_number = models.IntegerField()
