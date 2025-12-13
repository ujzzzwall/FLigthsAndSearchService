const express = require("express");
const BodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig')


const setupAndStartServer = async ()=>{
  //create the express object
  const app = express();

  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({extended:true}));

  app.listen(PORT , ()=>{
    console.log(`server started at port no ${PORT}`); 
    // console.log(process)
  });
}

setupAndStartServer();