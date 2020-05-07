from rest_framework import serializers

class PlayListSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    playlist_id = serializers.CharField(max_length=200)

class ArtistSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    playlist_id = serializers.CharField(max_length=200)

class TrackSerializer(serializers.Serializer):
    type = serializers.CharField(max_length=200)
    track_id = serializers.CharField(max_length=200)
    name = serializers.CharField(max_length=200)
    isExplicit = serializers.BooleanField()
    popularity = serializers.IntegerField(max_value=0, min_value=100)