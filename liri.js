require("dotenv").config();

var mySpotify = require("./spotify.js");
var myMovies = require("./movies.js");
var myConcerts = require("./concerts.js");

var userCommand  = process.argv[2];

var userInput = process.argv.splice(3, process.argv.length).join(' ');

function runSearch(userCommand, userInput){
if  (userCommand === "movie-this"){
    myMovies(userInput);
}
if  (userCommand === "spotify-this-song"){
    mySpotify(userInput);
}
if (userCommand === "concert-this"){
    myConcerts(userInput);
}
}

if (userCommand === "do-what-it-says"){
    var fs = require("fs");

    fs.readFile('random.txt','utf8', (err, data) => {
    if (err) throw err;
    var arr = data.split(",");
    runSearch(arr[0], arr[1])

  });

}

runSearch(userCommand,userInput);