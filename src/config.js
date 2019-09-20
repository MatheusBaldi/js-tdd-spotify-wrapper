require('dotenv').config();

export const API_URL = 'https://api.spotify.com/v1';
export const HEADERS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.SPOTIFY_AUTH_TOKEN}`,
  },
};
