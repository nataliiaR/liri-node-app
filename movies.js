require("dotenv").config();

var axios = require("axios");
var logger = require("./logger.js");

function myMovies(userInput){
    var movie = userInput;

    if(!movie){
        console.log("If you haven't seen 'Get Hard' movie, you definitely should");
        movie = "Get Hard";
    }

    var omdbURL = "http://www.omdbapi.com/?apikey=" +  process.env.OMDB_KEY + "&t="+ movie;

    axios.get(omdbURL)
        .then(function(response){
        var logInfo = "\n" + "Title of the movie ---- " + response.data.Title +
        "\n" + "Year the movie came out ---- " + response.data.Year +
        "\n" + "IMDB Rating of the movie ---- " + response.data.imdbRating + 
        "\n" + "Rotten Tomatoes Rating of the movie ---- " + response.data.Ratings[1].Value + 
        "\n" + "Country where the movie was produced ---- " + response.data.Country + 
        "\n" + "Language of the movie ---- "  + response.data.Language + 
        "\n" + "Plot of the movie ---- " + response.data.Plot +
        "\n" + "Actors in the movie ---- " + response.data.Actors;    

        console.log(logInfo);
    
        var logg = new logger(logInfo);
        logg.createLog();
    })
     .catch(function (error) {
        // handle error
        console.log(error);
      })

};

module.exports = myMovies;