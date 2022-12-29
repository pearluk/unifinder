import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
const User = require('./model/user');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const bcrypt = require('bcryptjs');
const expressApp = (app) => {
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.get("/api", (req, res, next) => {
    res.send("hello world");
  });

  app.post("/api/register", async (req, res,next) => {
    // Requiring module
    const salt = await bcrypt.genSalt(10);
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      res.status(200).json(hash)
    })
  

  //   try{
  //   const password = req.body.password;
  //   const salt = await bcrypt.genSalt(10);
  //   const secPass = await bcrypt.hash(password, salt);
  //   } catch(error){
  //     console.log({myerr:error})
  //   }
  //  try {
  //       const plainPassword = req.body.password;
  //       const newUser = await new User({
  //           name: req.body.username,
  //           email: req.body.email,
  //           password:req.body.password,
  //           address:req.body.address,
  //           studying:req.body.studying,
  //           phone:req.body.phone,
  //           terms_and_condition:req.body.terms_and_condition
  //           });

  // //save user and respond
  //       await newUser.save();
  //       res.status(200).json(newUser);
        

  //       } catch (err) {
  //       res.status(500).json(err)
  //       }
});





};

export default expressApp;
