const { AirportService }=require('../services/index')
const airportService = new AirportService();
const create = async (req,res)=>{
  try {
    const result = await airportService.create(req.body);
    return res.status(201).json({
      data : result,
      success : true,
      err : {},
      message : 'Successfully created a new airport'
    })
  } catch (error) {
    console.log('error')
    return res.status(500).json({
      data : {},
      success : false,
      err : error,
      message : 'cannot create a new airport'
    })
    
  }
}

const destroy = async (req,res)=>{
  try {
    
  } catch (error) {
    console.log('error')
    return res.status(500).json({
      data : {},
      success : false,
      err : error,
      message : 'cannot create a new airport'
    })
    
  }
}

const get = async (req,res)=>{
  try {
    
  } catch (error) {
    console.log('error')
    return res.status(500).json({
      data : {},
      success : false,
      err : error,
      message : 'cannot create a new airport'
    })
    
  }
}

const getAll = async (req,res)=>{
  try {
    
  } catch (error) {
    console.log('error')
    return res.status(500).json({
      data : {},
      success : false,
      err : error,
      message : 'cannot create a new airport'
    })
    
  }
}

const update = async (req,res)=>{
  try {
    
  } catch (error) {
    console.log('error')
    return res.status(500).json({
      data : {},
      success : false,
      err : error,
      message : 'cannot create a new airport'
    })
    
  }
}


const airportController = {
  create
}


module.exports ={airportController}