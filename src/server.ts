import express from "express";
import expressApp from "./express-app";
import { environmentVariables } from "./config";
const mongoose = require('mongoose');
// const app = express();
// const { PORT  } = environmentVariables;
const app = express();
  const uri = "mongodb+srv://shivamsharma:BsaLoUUdzoeJbkRo@lms.no0aese.mongodb.net/?retryWrites=true&w=majority";



const startServer = async () => {
  try{
  mongoose.set('strictQuery', false);
  await mongoose.connect(uri);
  mongoose.connect(uri).then(success => {
   console.log("db connected")
  }).catch(err => console.log());
  expressApp(app);
  app
    .listen((4040), () => {
      console.log(`listening to port 4040`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
  }catch(error){
      console.error(error);
  }


};

startServer();
