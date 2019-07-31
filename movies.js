
var fs = require("fs");
var axios = require("axios");

function myMovies(userInput){
    var movie = userInput;

    if(!movie){
        console.log("If you haven't seen 'Get Hard' movie, you definitely should");
        movie = "Get Hard";
    }

    var omdbURL = "http://www.omdbapi.com/?apikey=trilogy" + "&t="+ movie;

    axios.get(omdbURL)
        .then(function(response){
        console.log("Title of the movie ---- " + response.data.Title);
        console.log("Year the movie came out ---- " + response.data.Year);
        console.log("IMDB Rating of the movie ---- " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating of the movie ---- " + response.data.Ratings[1].Value);
        console.log("Country where the movie was produced ---- " + response.data.Country);
        console.log("Language of the movie ---- "  + response.data.Language);
        console.log("Plot of the movie ---- " + response.data.Plot);
        console.log("Actors in the movie ---- " + response.data.Actors);     

    })
     .catch(function (error) {
        // handle error
        console.log(error);
      })

};

module.exports = myMovies;