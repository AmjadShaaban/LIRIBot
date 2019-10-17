console.log("this is loaded");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
exports.APIKEYS = {
  omdb: process.env.OMDB_KEY,
  bands: process.env.BANDS_IN_TOWN_APP_ID
};
