
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
        console.log("Movie title " + response.data.Title);

    })
     .catch(function (error) {
        // handle error
        console.log(error);
      })

};

module.exports = myMovies;