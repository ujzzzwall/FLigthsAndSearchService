const {FlightService} = require('../services/index')

const flightService = new FlightService();

const create = async (req ,res)=>{
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
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
    return res.status(201).json({
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

// module.exports={
//   create
// }


const flightController = {create , getAll
} 

module.exports = {flightController}