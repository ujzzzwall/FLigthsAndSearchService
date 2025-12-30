// const CityController = require("./city-controller");
// const FlightController = require("./flight-controller");
// const AirportController  = require('./airport-controller');

// module.exports = (
//   CityController,
//   FlightController
// )


module.exports = {
  cityController: require('./city-controller').cityController,
  flightController: require('./flight-controller').flightController,
  airportController: require('./airport-controller').airportController
};