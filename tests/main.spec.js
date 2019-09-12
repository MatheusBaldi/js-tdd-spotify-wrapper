/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

describe('Spotify Wrappper', () => {
  describe('Smoke tests', () => {
    // search (genérico)
    // searchAlbuns
    // searchArtists
    // searchTracks
    // searchPlaylists

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      // eslint-disable-next-line no-unused-vars
      const artists = search();

    });
  });
});
