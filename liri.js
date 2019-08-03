require("dotenv").config();

var fs = require("fs");

var mySpotify = require("./spotify.js");
var myMovies = require("./movies.js");
var myConcerts = require("./concerts.js");

var userCommand  = process.argv[2];

var userInput = process.argv.splice(3, process.argv.length).join(' ');

if  (userCommand === "movie-this"){
    myMovies(userInput);
}
if  (userCommand === "spotify-this-song"){
    mySpotify(userInput);
}
if (userCommand === "concert-this"){
    myConcerts(userInput);
}