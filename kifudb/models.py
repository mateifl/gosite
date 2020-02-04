from django.db import models
from django.core.urlresolvers import reverse
from django.template.defaultfilters import slugify

from kifudb.managers import KifuManager, PlayerManager


class KifuGroup(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, blank=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('game-by-group', args=[self.slug])

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(KifuGroup, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Group"
        verbose_name_plural = "Groups"


class KifuTag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('game-by-tag', args=[self.name.lower()])

    class Meta:
        verbose_name = "Tag"
        verbose_name_plural = "Tags"


class Player(models.Model):
    name = models.CharField(max_length=255)
    rank = models.CharField(max_length=5, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    objects = PlayerManager()

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"


class Kifu(models.Model):
    game_text = models.TextField()
    game_date = models.DateField(null=True, blank=True)
    place = models.CharField(max_length=255, null=True, blank=True)
    white_player = models.ForeignKey(Player, related_name="white", null=True, blank=True)
    black_player = models.ForeignKey(Player, related_name="black", null=True, blank=True)
    result = models.TextField(null=True, blank=True)
    groups = models.ManyToManyField(KifuGroup, blank=True)
    description = models.TextField(null=True, blank=True)
    one_line_description = models.CharField(max_length=255, null=True, blank=True)
    tags = models.ManyToManyField(KifuTag, blank=True)
    objects = KifuManager()

    def get_absolute_url(self):
        return "game/" + str(self.id)

    def to_string(self):
        v = ""
        if self.black_player is not None:
            v = v + " " + self.black_player.name + "(B)"
        if self.white_player is not None:
            v = v + " vs. " + self.white_player.name + "(W)"
        if self.one_line_description is not None:
            if v is "":
                v = v + self.one_line_description
            else:
                v = v + " - " + self.one_line_description
        if v == "":
            v = "Game " + str(self.id)
        return v

    def __str__(self):
        return self.to_string()

    def __unicode__(self):
        return self.to_string()

    class Meta:
        verbose_name = "Game"
        verbose_name_plural = "Games"


class Position(models.Model):
    position_text = models.TextField()
    game = models.ForeignKey(Kifu)


class KifuDiagram(models.Model):
    diagram_title = models.CharField(max_length=256)
    diagram = models.ImageField(upload_to="uploads/")
    diagram_text = models.TextField()

    class Meta:
        verbose_name = "Diagram"
        verbose_name_plural = "Diagrams"


class KifuInfo(models.Model):
    comment = models.TextField()
    game = models.OneToOneField(Kifu, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Game information"
        verbose_name_plural = "Game information"
