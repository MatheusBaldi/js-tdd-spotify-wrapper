/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
// import sinonStubPromise from 'sinon-stub-promise';
import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
// sinonStubPromise(sinon);

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
      const fetchedStub = sinon.stub(global, 'fetch');

      // eslint-disable-next-line no-unused-vars
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();
    });

    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');

      const artists = search('Incubus', 'artist', 'authToken');
      expect(fetchedStub).to.have.been
        .calledWith('curl -X "GET" "https://api.spotify.com/v1/search?q=Incubus&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer authToken"');

      const albums = search('Incubus', 'album', 'authToken');
      expect(fetchedStub).to.have.been
        .calledWith('curl -X "GET" "https://api.spotify.com/v1/search?q=Incubus&type=album" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer authToken"');
      fetchedStub.restore();
    });
  });
});
