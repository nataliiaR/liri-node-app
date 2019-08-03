
var axios = require("axios");
var moment = require("moment");

function myConcerts(userInput){

    var artist = userInput;

    if(!artist){
        console.log("If you haven't heard 'Depeche Mode' band, you definitely should");
        artist = "Depeche Mode";
    }

    var bandInTownURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id="+process.env.BAND_KEY;

    axios.get(bandInTownURL).then(function(response){
        if (response.data.length>0){
            console.log("Here are all the concerts of "+ artist)
            for (var i=0; i<response.data.length; i++)
            {   
                console.log("--------------------------------------");
                console.log("Name of the venue ---- " + response.data[i].venue.name);
                console.log("Venue location ---- " + response.data[i].venue.country + " "+ response.data[i].venue.city );
                console.log("Date of the event ---- " + moment(response.data[i].datetime).format("MMM DD YYYY"));
            }
        }else {
            console.log(artist + " is not in tour");
        }
    })
     .catch(function (error) {
        console.log(error);
      })

};
module.exports = myConcerts;