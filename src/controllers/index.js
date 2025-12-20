// const CityController = require("./city-controller");
// const FlightController = require("./flight-controller");

// module.exports = (
//   CityController,
//   FlightController
// )


module.exports = {
  cityController: require('./city-controller').cityController,
  flightController: require('./flight-controller').flightController
};