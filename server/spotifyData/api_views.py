import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from django.http import JsonResponse
from spotifyData.serializers import PlayListSerializer




username = 'zapanet1001'

class PlayList(object):
    def __init__(self, name, playlist_id):
        self.name = name
        self.playlist_id = playlist_id



def hello(request):

  client_credentials_manager = SpotifyClientCredentials()
  sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

  playlists = sp.user_playlists(username)
  print(playlists)
  user_playlists = []
  for playlist in playlists['items']:
    pList = PlayList(name=playlist['name'], playlist_id=playlist['id'])
    print(pList)
    serializer = PlayListSerializer(pList)
    user_playlists.append(serializer.data)
    print(serializer.data)
  print(user_playlists)
  return JsonResponse(user_playlists, safe=False)