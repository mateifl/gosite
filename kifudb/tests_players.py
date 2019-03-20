from django.test import TestCase
from kifudb.models import Kifu, Player, KifuGroup


class PlayerTests(TestCase):

    def test_create(self):
        player = Player.objects.create(name="Lee Chang Ho")
        self.assertTrue(player is not None)

    def test_search_player(self):
        Player.objects.create(name="Lee Chang Ho")
        Player.objects.create(name="Cho Chikun")
        Player.objects.create(name="Yamada Kimio")
        Player.objects.create(name="Honinbo Shusaku")
        Player.objects.create(name="Honinbo Shuei")

        players = Player.objects.search(name="Yamada Kimio")
        self.assertEqual(len(players), 1)
        players = Player.objects.search(name="Yamada Honinbo")
        self.assertEqual(len(players), 3)