from rest_framework import serializers
from kifudb.models import Kifu, Player


class PlayerSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=255, required=False, allow_blank=True)
    last_name = serializers.CharField(max_length=255)
    middle_name = serializers.CharField(max_length=255, required=True, allow_blank=True)
    rank = serializers.CharField(max_length=5, required=True, allow_blank=True)
    # birth_date = serializers.DateField(required=True, allow_blank=True)

    def create(self, validated_data):
        return Player.objects.create(**validated_data)

    def create(self, validated_data):
        return Player.objects.create(**validated_data)


class KifuSerializer(serializers.Serializer):
    game_text = serializers.CharField()
    game_date = serializers.DateField(required=False)
    place = serializers.CharField(max_length=255, required=True, allow_blank=True)
    white_player = serializers.CharField(required=False, allow_blank=True)
    black_player = serializers.CharField(required=False, allow_blank=True)
    groups = serializers.CharField(required=True, allow_blank=False)
    description = serializers.CharField(required=True, allow_blank=True)
    one_line_description = serializers.CharField(max_length=255, required=True, allow_blank=True)

    def create(self, validated_data):
        return Kifu.objects.create(**validated_data)