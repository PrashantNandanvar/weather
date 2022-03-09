const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4a3ff305334c7f365ae8a869084428ba&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        res.body.current.weather_descriptions[0] +
          ". It is currently " +
          res.body.current.temperature +
          " degress out."
      );
    }
  });
};
module.exports = forecast;
