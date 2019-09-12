// eslint-disable-next-line import/prefer-default-export
export const search = (query, type, token) => {
  fetch(`curl -X "GET" "https://api.spotify.com/v1/search?q=${query}&type=${type}" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer ${token}"`);
};

export const searchAlbuns = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
