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

