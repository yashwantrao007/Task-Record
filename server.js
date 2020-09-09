const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cron = require("node-cron");
var mongoose = require("mongoose");
var Db = require("mongodb").Db;
var MongoClient = require("mongodb").MongoClient;
var { mongourl } = require("./config/keys");
const Con = require("./models/con");
mongoose.connect(mongourl, { useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.render("tod.ejs");
});
app.set("view engine", "ejs");
app.post("/todo", (req, res) => {
  var Items = new Con({
    taskname: req.body.taskname,
    taskdescription: req.body.taskdescription,
    creator: req.body.creator,
    duration: req.body.duration,
    created: req.body.created,
  });
  Items.save().then((data) => {
    console.log("saved");
  });
  console.log(req.body);
});
var date = new Date();
var time = date.getHours();
var mins = date.getMinutes();
console.log(time);
console.log(mins);
app.listen(3000, () => {
  console.log("welcome to records");
});
