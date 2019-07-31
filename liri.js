require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var mySpotify = require("./spotify.js");
var myMovies = require("./movies.js");
var myConcerts = require("./concerts.js");

var userCommand  = process.argv[2];

var userInput = process.argv.splice(3, process.argv.length).join(' ');

if  (userCommand === "movie"){
    myMovies(userInput);
}