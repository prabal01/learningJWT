const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   required:false
  // },
  fullName: {
    type: String,
    trim: true,
    required: "Full Name of user is required",
  },
  username:{
      type:String,
      trim:true,
      required:"Username is required",
      unique:true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    required: "password is required",
  },
  state: {
    type: String,
    required: "please select state from drop down",
  },
  city: {
    type: String,
    required: "Please select city from drop down",
  },
});

module.exports = mongoose.model("User", userSchema);
