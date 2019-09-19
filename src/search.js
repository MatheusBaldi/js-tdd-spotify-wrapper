import { API_URL } from './config';
import { toJSON } from './utils';

require('dotenv').config();

// eslint-disable-next-line import/prefer-default-export
export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.SPOTIFY_AUTH_TOKEN}`,
  },
}).then(toJSON);

export const searchAlbums = (query) => search(query, 'album');
export const searchArtists = (query) => search(query, 'artist');
export const searchTracks = (query) => search(query, 'xxxxxx');
export const searchPlaylists = (query) => search(query, 'playlist');
