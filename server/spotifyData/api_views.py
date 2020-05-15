from django.shortcuts import render, HttpResponseRedirect
import os
import json
import webbrowser

import spotipy
import spotipy.util as util
from spotipy import oauth2
scope = 'user-library-read'
SPOTIPY_CLIENT_ID = '293ff85d0b44417a90c6ce737d4e31cb'
SPOTIPY_CLIENT_SECRET = 'de5e8784ea49446c9368b646a00bed1e'
SPOTIPY_REDIRECT_URI = 'http://127.0.0.1:8000/after-sign-in/'
username = 'zapanet1001'

from django.http import JsonResponse
from spotifyData.serializers import PlayListSerializer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter



# username = 'zapanet1001'

class PlayList(object):
    def __init__(self, name, playlist_id):
        self.name = name
        self.playlist_id = playlist_id

class Track(object):
    def __init__(self, type, track_id, name, isExplicit, popularity):
        self.type = type
        self.track_id = track_id
        self.name = name
        self.isExplicit = isExplicit
        self.popularity = popularity
        
def next_offset(n):
    try:
        return int(n['next'].split('?')[1].split('&')[0].split('=')[1])
    except ValueError:
        return None
    except AttributeError:
        return None
    except TypeError:
        return None



def sign_in(request):
  sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,
                                   scope=scope, cache_path=".cache-" + username)
  token_info = sp_oauth.get_cached_token()
  if not token_info:
    auth_url = sp_oauth.get_authorize_url()
    return HttpResponseRedirect(auth_url)
  sp = spotipy.Spotify(auth=token_info['access_token'])
  total = []
  results = sp.current_user_saved_tracks(limit=50)
  next = next_offset(results)

  total.append(results)
  while next and next < int(results['total']):
    next_50 = sp.current_user_saved_tracks(limit=50, offset=next)
    next = next_offset(next_50)
    total.append(next_50)
    print(next)
  tracks = []
  for r in total:
    for track in r['items']:

      tracks.append(track)
  return JsonResponse(tracks, safe=False)
  # return render(request, 'pages/sign-in.html', {'results': tracks})

def after_sign_in(request):
  results = {}
  token = 'http://localhost:8000/after-sign-in/?{}'.format(request.GET.urlencode())
  sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,
                                   scope=scope, cache_path=".cache-" + username)
  code = sp_oauth.parse_response_code(token)
  token_info = sp_oauth.get_access_token(code)
  if token_info:
    sp = spotipy.Spotify(auth=token_info['access_token'])
    results = sp.current_user_saved_tracks(limit=50)
  # return render(request, 'pages/sign-in.html', {'results': results['items']})
  return JsonResponse(results['items'], safe=False)

def get_user_profile(request):
  sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,
                                   scope=scope, cache_path=".cache-" + username)
  token_info = sp_oauth.get_cached_token()
  if not token_info:
    auth_url = sp_oauth.get_authorize_url()
    return HttpResponseRedirect(auth_url)
  sp = spotipy.Spotify(auth=token_info['access_token'])
  
  results = sp.user(username)
  total = []
  total.append(results)
  thisDict = {
    "user": total
  }
  
  
  return JsonResponse(thisDict, safe=False)

def get_user_playlists(request):
  sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,
                                   scope=scope, cache_path=".cache-" + username)
  token_info = sp_oauth.get_cached_token()
  if not token_info:
    auth_url = sp_oauth.get_authorize_url()
    return HttpResponseRedirect(auth_url)
  sp = spotipy.Spotify(auth=token_info['access_token'])
  total = []
  results = sp.user_playlists(username)
  next = next_offset(results)

  total.append(results)
  while next and next < int(results['total']):
    next_50 = sp.user_playlists(limit=50, offset=next)
    next = next_offset(next_50)
    total.append(next_50)
    print(next)
  playlists = []
  for r in total:
    for playlist in r['items']:
      playlists.append(playlist)
  return JsonResponse(playlists, safe=False)

def get_user_saved_tracks(request):
  sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,
                                   scope=scope, cache_path=".cache-" + username)
  token_info = sp_oauth.get_cached_token()
  if not token_info:
    auth_url = sp_oauth.get_authorize_url()
    return HttpResponseRedirect(auth_url)
  sp = spotipy.Spotify(auth=token_info['access_token'])
  total = []
  results = sp.current_user_saved_tracks(limit=50)
  
  
  return JsonResponse(results, safe=False)

def get_full_album(request):
  sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,
                                   scope=scope, cache_path=".cache-" + username)
  token_info = sp_oauth.get_cached_token()
  if not token_info:
    auth_url = sp_oauth.get_authorize_url()
    return HttpResponseRedirect(auth_url)
  sp = spotipy.Spotify(auth=token_info['access_token'])
  total = []
  results = sp.current_user_saved_tracks(limit=50)
  for song in results['items']:
    full = sp.album(song['track']['album']['id'])
    print(full['label'])
    
  return JsonResponse(results, safe=False)
