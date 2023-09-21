const mongoose = require("mongoose");

const placesSchemaForm = new mongoose.Schema({
    infoCode:String,
    name: String,
    data: String,
})


const bacton = placesSchemaForm;

module.exports = mongoose.model("bacton", bacton);