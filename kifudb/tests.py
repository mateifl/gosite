from django.test import TestCase
from kifudb.models import Kifu, Player, KifuGroup


# Create your tests here.
class KifuTests(TestCase):

    player1 = None
    player2 = None
    player3 = None
    player4 = None
    group = None

    def setUp(self):
        self.player1 = Player.objects.create(name='Lee Chang Ho')
        self.player2 = Player.objects.create(name='Cho Chikun')
        self.player3 = Player.objects.create(name='Lee Sedol')
        self.player4 = Player.objects.create(name='Otake Hideo')
        self.group = KifuGroup.objects.create(name="Group1", slug="group1")

    def test_create_kifu(self):
        kifu1 = Kifu.objects.create(white_player=self.player1, black_player=self.player2, game_text="test_create_kifu: game text1")
        kifu2 = Kifu.objects.create(white_player=self.player1, black_player=self.player2, game_text="test_create_kifu: game text2")

    def test_search_kifu_by_player_name(self):
        group2 = KifuGroup.objects.create(name="Test_Group", slug="test_group")
        kifu1 = Kifu.objects.create(white_player=self.player1, black_player=self.player2,
                                    game_text="test_create_kifu: game text1", one_line_description="Game number 1")
        kifu2 = Kifu.objects.create(white_player=self.player1, black_player=self.player2,
                                    game_text="test_create_kifu: game text2", one_line_description="Bad number 1")
        kifu3 = Kifu.objects.create(white_player=self.player1, black_player=self.player3,
                                    game_text="test_create_kifu: game text3", one_line_description="Nice number 1")
        kifu4 = Kifu.objects.create(white_player=self.player1, black_player=self.player4,
                                    game_text="test_create_kifu: game text4", one_line_description="This is a description 1")
        print(self.player4)
        games = Kifu.objects.search("Otake", None, None, None)
        self.assertEqual(len(games), 1)
        games = Kifu.objects.search(None, "Hideo", None, None)
        self.assertEqual(len(games), 1)
        games = Kifu.objects.search("Lee Chang Ho", "Hideo", None, None)
        self.assertEqual(len(games), 1)
        games = Kifu.objects.search("Lee", None, None, None)
        self.assertEqual(len(games), 4)
        Kifu.objects.all().delete()

    def tearDown(self):
        Player.objects.all().delete()
        KifuGroup.objects.all().delete()

