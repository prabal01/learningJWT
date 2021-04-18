require("dotenv").config({ debug: process.env.DEBUG });
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const Cities = require("../models/cities.js");
const User = require("../models/user.js");
const mongoose = require("mongoose");

exports.registration = (req, res) => {
  const uname = req.param("uname");
  const pword = req.param("pword");
  const name = req.param("fullName");
  const email = req.param("email");
  const state = req.param("state");
  const city = req.param("city");

  if (!(uname && pword && name && email && state && city))
    res.json({ msg: "All fields are required" });

  User.countDocuments({ email: email, username: uname }, (err, c) => {
    if (c >= 1) {
      return res
        .status(400)
        .json({ msg: "Username or email address already exits" });
    } else {
      return User.create(
        {
          fullName: name,
          username: uname,
          email,
          password: pword,
          state,
          city,
        },
        (err, r) => {
          if (err) {
            console.log(err);
            return res.json({ msg: "error" });
          } else {
            console.log(r);
            return res.json({ msg: "success" });
          }
        }
      );
    }
  });
};

exports.login = (req, res) => {
  const uname = req.param("uname");
  const pword = req.param("pword");

  // var token = jwt.sign({foo:'bar'}, 'shhhh');
  User.find({ username: uname }, (err, user) => {
    if (err) {
      return res.status(404).json({ msg: "Error: Something happened" });
    }
    let data = JSON.parse(JSON.stringify(user));
    console.log(data[0].password);
    if (data[0].password != pword) {
      return res.status(200).send("Username or password incorrect");
    } else {
      const token = jwt.sign({ _id: data[0]._id }, process.env.SECRET);
      res.cookie("token", token, { expire: new Date() + 333 });
      return res.status(200).json({
        token,
        user: {
          name: data[0].fullName,
          email: data[0].email,
          username: data[0].username,
          state: data[0].state,
          city: data[0].city,
        },
      });
    }
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
  } else
    res
      .status(400)
      .json({ msg: `Err: Please send "stateName" with the request` });
};
