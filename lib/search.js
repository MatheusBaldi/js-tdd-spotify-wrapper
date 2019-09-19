"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

require('dotenv').config(); // eslint-disable-next-line import/prefer-default-export


var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: "Bearer ".concat(process.env.SPOTIFY_AUTH_TOKEN || 'BQBMCuMQUImu1rmsjmUbL7r0tnzttRv_pA4YYInsoLqDHZFTc3DDTWtS0x0Q2c0ey7nMEiMEi7_DempthcJKjiVeDZKiFFIqRG7I2m_xv9fRqV-IU4-_7GoG2W5gelkw9S5JemL-bJImteGn')
    }
  }).then(_utils.toJSON);
};

exports.search = search;

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

exports.searchAlbums = searchAlbums;

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;