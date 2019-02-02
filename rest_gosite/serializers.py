from rest_framework import serializers
from kifudb.models import Kifu, Player


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'first_name', 'last_name', 'rank', 'birth_date', 'middle_name')


class KifuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kifu
        fields = ('id', 'game_text', 'game_date', 'place', 'white_player', 'black_player', 'groups', 'description',
                  'one_line_description')
