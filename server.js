require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path')
const crypto = require('crypto')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const bacton = require("./public/database/placesSchemas");
const mongoURL = "mongodb://localhost:27017/db"

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.use(express.static("public"));
mongoose.set('strictQuery', false);

const conn = mongoose.createConnection(process.env.MONGO_URI)

mongoose
  .connect("mongodb://localhost/db")
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error));

let gfs, gfsBucket;
conn.once('open', () => {
    gfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {bucketName: 'files'});
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('files');
})

  

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/image/:filename", async (req, res) => {
  const fetch = await gfs.files.find({ filename: req.params.filename }).toArray()
  if (fetch.length === 0) res.send("NO FILE EXISTS")
  else {
      const file = fetch[0];
      if (file.contentType === "image/jpeg" || file.contentType === 'image/png') {
          const readStream = gfsBucket.openDownloadStream(file._id);
          readStream.pipe(res);
      }
      else {
          res.send("NOT AN IMAGE");
      }
  }
})

app.get("/places", (req, res) => {
  res.render("places");
});

app.get("/places/artifacts", async (req, res) => {
  const arList = await bacton.find();
  res.render("artifacts", { fetchData: arList });
});



app.get("/places/artifacts/:code", async (req, res) => {
    const data = await bacton.find(
      {infoCode: req.params.code },
      { infoCode: 1, name: 1, data: 1, _id: 0 }
    );
    let titleText = data[0].name;
    let contentText = data[0].data;
  let imageLink = "/image/" + req.params.code + '.jpg';
  
  
    res.render("info", { title: titleText, content: contentText, imageLink: imageLink });
});


app.get('/map', (req, res) => {
  res.render('map');
})

app.listen(PORT);
