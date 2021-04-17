const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
    _id:{
        type:String,
    },
    name:{
        type:String,
    },
    state:{
        type:String,
    }
});

module.exports = mongoose.model("Cities", citiesSchema);