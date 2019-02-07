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
        serializer = KifuSerializer(data=request.data)
        print(serializer.is_valid())
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.validated_data)
        white_player_name = serializer.validated_data['white_player']
        black_player_name = serializer.validated_data['black_player']


        white_player_list = Player.objects.search(white_player_name)
        black_player_list = Player.objects.search(black_player_name)

        if len(white_player_list) == 0:
            white = Player.objects.create_player(white_player_name)
            white.save()
        else:
            white = white_player_list[0]

        if len(black_player_list) == 0:
            black = Player.objects.create_player(black_player_name)
            black.save()
        else:
            black = black_player_list[0]

        self.logger.debug("Players set ")

        Kifu.objects.create(serializer.validated_data)
        return Response(serializer.data)


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

