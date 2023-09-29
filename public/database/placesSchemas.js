const mongoose = require("mongoose");

const placesSchemaForm = new mongoose.Schema({
    infoCode:String,
    title_vi: String,
    content_vi: String,
    video_vi: String,
    title_en: String,
    content_en: String,
    video_en:String,
    image:String,
})


const bacton = placesSchemaForm;

module.exports = mongoose.model("bacton", bacton);