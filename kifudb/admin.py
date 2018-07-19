from django.contrib import admin
from kifudb.models import Kifu, Player, KifuGroup, KifuTag, KifuDiagram

admin.site.register(Kifu)
admin.site.register(Player)
admin.site.register(KifuGroup)
admin.site.register(KifuTag)
admin.site.register(KifuDiagram)
