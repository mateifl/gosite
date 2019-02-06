from rest_framework import serializers
from kifudb.models import Kifu, Player


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'first_name', 'last_name', 'rank', 'birth_date', 'middle_name')


class KifuSerializer(serializers.ModelSerializer):
    white_player = serializers.CharField(required=False, allow_blank=True, max_length=100)
    black_player = serializers.CharField(required=False, allow_blank=True, max_length=100)
    groups = serializers.SlugRelatedField(many=True, slug_field="slug", read_only=True)

    class Meta:
        model = Kifu
        fields = ('id', 'game_text', 'game_date', 'place', 'description', 'one_line_description',
                  'white_player', 'black_player', 'groups')
