const express = require("express");
const BodyParser = require("body-parser");

const {PORT,SYNC_DB} = require('./config/serverConfig')

const ApiRoutes = require('./routes/index')
const db = require('./models/index');

const setupAndStartServer = async ()=>{
  //create the express object
  const app = express();

  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({extended:true}));

  app.use('/api', ApiRoutes);

  app.listen(PORT , async ()=>{
    console.log(`server started at port no ${PORT}`); 
    if(SYNC_DB){
      db.sequelize.sync({alert: true})
    }
    // console.log(process)
  }); 
}

setupAndStartServer();

