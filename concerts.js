
var axios = require("axios");
var moment = require("moment");
var logger = require("./logger.js");

function myConcerts(userInput){

    var artist = userInput;

    if(!artist){
        console.log("If you haven't heard 'Depeche Mode' band, you definitely should");
        artist = "Depeche Mode";
    }

    var bandInTownURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id="+process.env.BAND_KEY;

    axios.get(bandInTownURL).then(function(response){
        if (response.data.length>0){
            var logInfo ="";
            console.log("Here are all the concerts of "+ artist)
            for (var i=0; i<response.data.length; i++)
            {   
                console.log("--------------------------------------");
                var output = "\n" + "You have searched for "+ userInput + "\n" + "Name of the venue ---- " + response.data[i].venue.name + 
                "\n" + "Venue location ---- " + response.data[i].venue.country + " "+ response.data[i].venue.city+
                "\n" + "Date of the event ---- " + moment(response.data[i].datetime).format("MMM DD YYYY");
                console.log(output);
                logInfo +=output+"\n"+"-----------------------------------"+"\n";

            }
            var logg = new logger(logInfo);
            logg.createLog();
        }else {
            console.log(artist + " is not in tour");
        }
    })
     .catch(function (error) {
        console.log(error);
      })

};
module.exports = myConcerts;