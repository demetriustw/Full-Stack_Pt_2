const request = require("request");

const forecast = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=80a726407ada905accbb2ba5413f4578&query=" +
    address +
    // + latitude + "," + longitude +
    "&units=f";
  // get the weather data for Utah via JSONP

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather survice!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees out. It feels like " +
          response.body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
