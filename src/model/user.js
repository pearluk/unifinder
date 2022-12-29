const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    //   unique: true,
    },
    
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },

    studying: {
        type: String,
        required: true,
        min: 3,
      },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: false,
    },
   
    terms_and_condition:{
      type: String,
      max: 50,
      required:true,
    },
    
    phone:{
      type: String,
      max: 50,
      required:true,
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
   
    city: {
      type: String,
      max: 50,
      default:false,
    },
     address: {
        type: String,
        max: 500,
        default:false,
      },

      otp: {
        type: String,
        max: 100,
        default:false,
      },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
