const request = require("request");

let key = "8ebf33a67a7d1b6173ce940052e4a81d";

const geocode = (address, callback) => {
  console.log(address);
  const url =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    encodeURIComponent(address) +
    `&appid=${key}&limit=5`;
  console.log(url);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.message || response.body.length === 0) {
      error = response;
      if (response.body.length === 0) {
        console.log("Unable to find location. Try another search.");
      } else {
        console.log("Please enter a location");
      }
    } else {
      if (address.includes(",")) {
        const myArray = address.split(",");

        for (let i = 0; i < 5; i++) {
          let body = response.body[i];
          let state = body.state;

          if (state.includes(myArray[1])) {
            const place_name = body.name + ", " + state + ", " + body.country;
            callback(undefined, {
              latitude: body.lat,
              longitude: body.lon,
              location: place_name,
            });
          }
        }
      } else {
        const place_name =
          response.body[0].name +
          ", " +
          response.body[0].state +
          ", " +
          response.body[0].country;
        callback(undefined, {
          latitude: response.body[0].lat,
          longitude: response.body[0].lon,
          location: place_name,
        });
      }
    }
  });
};

module.exports = geocode;
