// eslint-disable-next-line import/prefer-default-export
export const search = (query, type) => {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then((data) => data.json())
    .catch((err) => err);
};

export const searchAlbuns = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
