"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;

require('dotenv').config();

var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: "Bearer ".concat(process.env.SPOTIFY_AUTH_TOKEN)
  }
};
exports.HEADERS = HEADERS;