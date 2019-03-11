from django.test import TestCase
from kifudb.models import Kifu, Player, KifuGroup


# Create your tests here.
class KifuTests(TestCase):

    def setUp(self):
        Player.objects.create(first_name='Lee', last_name="Chang Ho")
        Player.objects.create(first_name='Cho', last_name="Chikun")
        # Kifu.objects.create(  )
        # Kifu.objects.create()
        # Kifu.objects.create()