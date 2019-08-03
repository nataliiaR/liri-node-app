require("dotenv").config();

var mySpotify = require("./spotify.js");
var myMovies = require("./movies.js");
var myConcerts = require("./concerts.js");
var fs = require("fs");

var userCommand  = process.argv[2];

var userInput = process.argv.splice(3, process.argv.length).join(' ');

function runSearch(userCommand, userInput){

    switch (userCommand){
        case "movie-this":
            myMovies(userInput);
            break;
        case "spotify-this-song":
            mySpotify(userInput);
            break;
        case "concert-this":
            myConcerts(userInput);
            break;
        case "do-what-it-says":
            fs.readFile('random.txt','utf8', (err, data) => {
                if (err) throw err;
                var arr = data.split(",");
                runSearch(arr[0], arr[1])
            });
            break;
    }

}


runSearch(userCommand,userInput);