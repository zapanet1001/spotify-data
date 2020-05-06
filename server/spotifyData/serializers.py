from rest_framework import serializers

class PlayListSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    playlist_id = serializers.CharField(max_length=200)