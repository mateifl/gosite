from django.test import TestCase
from kifudb.models import Kifu, Player, KifuGroup


# Create your tests here.
class KifuTests(TestCase):

    player1 = None
    player2 = None
    player3 = None
    player4 = None
    group = None

    def setUpClass():
        Player.objects.create(first_name='Lee', last_name="Chang Ho")
        Player.objects.create(first_name='Cho', last_name="Chikun")
        Player.objects.create(first_name='Lee', last_name="Sedol")
        Player.objects.create(first_name='Otake', last_name="Hideo")
        KifuGroup.objects.create(name="Group1", slug="group1")

    def test_create_kifu(self):
        kifu1 = Kifu.objects.create(white_player=self.player1, black_player=self.player2, game_text="test_create_kifu: game text1")
        kifu2 = Kifu.objects.create(white_player=self.player1, black_player=self.player2, game_text="test_create_kifu: game text2")
        Kifu.objects.all().delete()

    def test_search_kifu(self):
        group2 = KifuGroup.objects.create(name="Test_Group", slug="test_group")
        kifu1 = Kifu.objects.create(white_player=self.player1, black_player=self.player2, game_text="test_create_kifu: game text1")
        kifu2 = Kifu.objects.create(white_player=self.player1, black_player=self.player2, game_text="test_create_kifu: game text2")
        kifu3 = Kifu.objects.create(white_player=self.player1, black_player=self.player3, game_text="test_create_kifu: game text3")
        kifu4 = Kifu.objects.create(white_player=self.player1, black_player=self.player4, game_text="test_create_kifu: game text4")

        Kifu.objects.all().delete()

    def tearDownClass():
        Player.objects.all().delete()
        KifuGroup.objects.all().delete()