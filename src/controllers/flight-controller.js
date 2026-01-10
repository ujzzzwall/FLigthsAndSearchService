const {FlightService} = require('../services/index')
const{SuccessCodes} = require('../utils/error-codes')
const flightService = new FlightService();

const create = async (req ,res)=>{
  try {
    const flightRequestdata = {
      flightNumber : req.body.flightNumber,
      airplaneId : req.body.airplaneId,
      departureAirportId : req.body.departureAirportId,
      arrivalAirportId : req.body.arrivalAirportId,
      arrivalTime : req.body.arrivalTime,
      departureTime : req.body.departureTime,
      price : req.body.price
    }
    const flight = await flightService.createFlight(flightRequestdata);
    return res.status(SuccessCodes.CREATED).json({
      data : flight,
      success : true,
      message : 'Sucessfully created a flight',
      err : {}
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : 'Not be able to create a flight',
      err : error
    })
  }
}

const getAll = async (req, res)=>{
  try {
    const flight = await flightService.getAllFlightsData(req.query);
    return res.status(SuccessCodes.OK).json({
      data : flight ,
      success: true,
      message : 'Successfully fetched att flights',
      err :{}
  })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : 'Not be able to fetch the flights',
      err : error
    })
  } 
}

const get = async (req, res)=>{
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data : response ,
      success: true,
      message : 'Successfully fetched the flight',
      err :{}
  })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : 'Not be able to fetch the flight',
      err : error
    })
  }
}

const update = async (req,res)=>{ 
  try {
    const response = await flightService.updateFlight(req.params.id , req.body);
    return res.status(SuccessCodes.OK).json({
      data : response ,
      success: true,
      message : 'Successfully updated the flight',
      err :{}
  })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : 'Not be able to update the flight',
      err : error
    })
  }
}
// module.exports={
//   create
// }


const flightController = {create , getAll , get ,update
} 

module.exports = {flightController}