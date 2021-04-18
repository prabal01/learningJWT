require("dotenv").config({ debug: process.env.DEBUG });
const jwt = require("jsonwebtoken");
const Cities = require("../models/cities.js");
const User = require("../models/user.js");
const mongoose = require("mongoose");

exports.registration = (req, res) => {

};

exports.login = (req, res) => {
  const uname = req.param("uname")
  const pword = req.param("pword")
  
  // var token = jwt.sign({foo:'bar'}, 'shhhh');
  User.find({ username: uname }, (err, user)=>{
    if(err){
      return res.status(404).json({msg:"Error: Something happened"});
    }
    let data = JSON.parse(JSON.stringify(user));
    console.log(data[0].password);
    if(data[0].password!=pword){
      return res.status(200).send("Username or password incorrect");
    }
    else return res.status(200).send("Login Succesfully");
  });
};

exports.stateAPI = (req, res) => {
  mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  let data;
  Cities.find().distinct("state", (err, docs) => {
    if (err) {
      res.send("error");
    }
    data = docs;
  });
  setTimeout(() => {
    // console.log(data);
    res.status(200).json(JSON.parse(JSON.stringify(Object.assign({}, data))));
  }, 50);
};

exports.cityAPI = (req, res) => {
  mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  if (req.param("stateName")) {
    let data;
    Cities.find({ state: req.param("stateName") }, (err, docs) => {
      if (err) {
        res.send("error");
      }
      myCities = new Array();
      docs.forEach((item) => {
        temp = item.name;
        if (!myCities.includes(temp)) {
          myCities.push(temp);
        }
      });
      data = myCities;
    });
    setTimeout(() => {
      // console.log(data);
      res.status(200).json(JSON.parse(JSON.stringify(Object.assign({}, data))));
    }, 50);
  }
  else res.status(400).json({msg:`Err: Please send "stateName" with the request`})
};
