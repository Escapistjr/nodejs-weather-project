const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=37d6d791a2446dd9920ac4d9516d451a&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    const current = response.body.current;
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `${current.weather_descriptions[0]}. It is currently ${current.temperature} degress out. It feels like ${current.feelslike} degress out. And humidity is ${current.humidity}%`
      );
    }
  });
};

module.exports = forecast;
