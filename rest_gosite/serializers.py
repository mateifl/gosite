from rest_framework import serializers
from kifudb.models import Kifu, Player


# class PlayerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Player
#         fields = ('id', 'first_name', 'last_name')


class KifuSerializer(serializers.Serializer):
    white_player = serializers.CharField(max_length=200, allow_null=True)
    black_player = serializers.CharField(max_length=200, allow_null=True)
    one_line_description = serializers.CharField(max_length=200, allow_null=True)
    description = serializers.CharField(max_length=200)
    game_text = serializers.CharField()
    game_date = serializers.DateTimeField(allow_null=True)
    groups = serializers.CharField(max_length=200, allow_null=True)
