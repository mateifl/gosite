from django.test import TestCase
from kifudb.models import Kifu, Player, KifuGroup


# Create your tests here.
class PlayerTests(TestCase):

    def test_create(self):
        player = Player.objects.create_player("Lee Chang Ho")
        self.assertTrue(player is not None)
        self.assertTrue(player.first_name=="Lee Chang")
        self.assertTrue(player.last_name=="Ho")
