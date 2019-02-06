from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kifudb.models import Kifu, Player
from rest_gosite.serializers import KifuSerializer, PlayerSerializer


class KifuListRestView(APIView):

    def get(self, request, format=None):
        kifus = Kifu.objects.all()
        serializer = KifuSerializer(kifus, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        white_player_name = request.data['white_player']
        black_player_name = request.data['black_player']

        white_player_list = Player.objects.search(white_player_name)
        black_player_list = Player.objects.search(black_player_name)

        if len(white_player_list) == 0:
            request.data['white_player'] = None
        else:
            request.data['white_player'] = white_player_list[0]

        if len(black_player_list) == 0:
            request.data['black_player'] = None
        else:
            request.data['black_player'] = black_player_list[0]

        serializer = KifuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

