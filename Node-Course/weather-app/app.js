const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//
// Goal 1: Print a small forecast to the user
//
// 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
// 2. Test your work!

// Geocoding
// Address -> Lat/Long -> Weather
//

//
// Goal 2: Print a lat/long for Los Angeles
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both te latittude and longitude to the terminal
// 4. Test your work!

//
// Goal 3: Handle errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup eror handling for no matching results
// 4. Test by altering the search term and running the app

geocode("Boston,England", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast("44.1545,-75.7088", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
