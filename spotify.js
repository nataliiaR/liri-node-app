
var Spotify = require('node-spotify-api');
var spotifyId = process.env.SPOTIFY_ID;
var spotifySecret = process.env.SPOTIFY_SECRET;
 
var spotify = new Spotify({
  id: spotifyId,
  secret: spotifySecret
});
 
function mySpotify(userInput){

    if(!userInput){
      console.log("If you haven't listen to 'Depeche Mode' band, you definitely should");
      userInput = "Depeche Mode"; 
    }
    spotify.search({ type: 'track', query: userInput}, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
 
    console.log("Artist: " +data.tracks.items[0].artists[0].name); 
    console.log("Track "+ data.tracks.items[0].name);
    console.log("Album: " +data.tracks.items[0].album.name); 
    console.log("Track URL "+ data.tracks.items[0].external_urls.spotify);
    });
}
module.exports = mySpotify;