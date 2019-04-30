from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kifudb.models import Kifu, Player
from kifudb.utils import LoggerMixin
from rest_gosite.serializers import KifuSerializer


class KifuListRestView(LoggerMixin, APIView):

    def get(self, request, format=None):
        kifus = Kifu.objects.all()
        serializer = KifuSerializer(kifus, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        self.logger.debug("POST GAME")
        serializer = KifuSerializer(data=request.data)
        self.logger.debug("Serializer valid: " + str(serializer.is_valid()))
        if not serializer.is_valid():
            self.logger.error(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        self.logger.debug(serializer.validated_data)
        white = self.set_player(serializer.validated_data, "white_player")
        black = self.set_player(serializer.validated_data, "black_player")
        one_line_description = serializer.validated_data['one_line_description']

        if white is None and black is None and one_line_description is None:
            self.logger.error("Players and short description cannot be null")

        self.logger.debug("Players set")
    
        data = { "one_line_description": one_line_description, "white_player": white, "black_player": black }
        Kifu.objects.create(**data)
        return Response(serializer.data)

    def set_player(self, data, player):
        player_name = data[player]
        if player_name is None:
            return None
        player_list = Player.objects.search(player_name)
        if len(player_list) == 0:
            player = Player.objects.create(name=player_name)
            player.save()
        else:
            player = player_list[0]
        return player

class KifuRestView(APIView):

    def get(self, request, pk, format=None):
        kifu = Kifu.objects.get(pk=pk)
        serializer = KifuSerializer(kifu)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        kifu = Kifu.objects.get(pk=pk)
        serializer = KifuSerializer(kifu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

