/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// getAlbum
// getAlbums
// getAlbumTracks
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from '../src/album';

global.fetch = require('node-fetch');

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Album', () => {
  let stubbedFetch;

  beforeEach(() => {
    stubbedFetch = sinon.stub(global, 'fetch');
    stubbedFetch.resolves({ json: () => ({ body: 'json' }) });
  });

  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });
    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const album = getAlbum();
      return expect(stubbedFetch).to.have.been.calledOnce;
    });
    // verifica se o fetch ocorre com a url desejada
    it('should call fetch with the correct url', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = getAlbum('otherId');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/otherId');
    });
    // verifica se o dado é recebido pela promise
    it('should return correct data from promise', () => {
      const album = getAlbum();

      return expect(album).to.eventually.be.eql({ body: 'json' });
    });
  });

  describe('getAlbums', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const albums = getAlbums();
      return expect(stubbedFetch).to.have.been.calledOnce;
    });
    // verifica se o fetch ocorre com a url desejada
    it('should call fetch with the correct url', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', 'otherId']);
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,otherId');
    });
    // verifica se o dado é recebido pela promise
    it('should return correct data from promise', () => {
      const albums = getAlbums();

      return expect(albums).to.eventually.be.eql({ body: 'json' });
    });
  });

  describe('getAlbumTracks', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      return expect(stubbedFetch).to.have.been.calledOnce;
    });
    // verifica se o fetch ocorre com a url desejada
    it('should call fetch with the correct url', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });
    // verifica se o dado é recebido pela promise
    it('should return correct data from promise', () => {
      const tracks = getAlbumTracks();

      return expect(tracks).to.eventually.be.eql({ body: 'json' });
    });
  });
});
