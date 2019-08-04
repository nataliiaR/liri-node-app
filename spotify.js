
var Spotify = require('node-spotify-api');
var logger = require("./logger.js");

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
    var logInfo = "\n" + "Artist: " +data.tracks.items[0].artists[0].name + 
    "\n" + "Track "+ data.tracks.items[0].name + 
    "\n" + "Album: " +data.tracks.items[0].album.name + 
    "\n" + "Track URL "+ data.tracks.items[0].external_urls.spotify + "\n";
    console.log(logInfo);

    var logg = new logger(logInfo);
    logg.createLog();
    });
}
module.exports = mySpotify;