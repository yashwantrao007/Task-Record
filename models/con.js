var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var conSchema = new Schema({
  taskname: String,
  taskdescription: String,
  creator: String,
  duration: {
    type: Number,
    min: 1,
    max: 60,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("con", conSchema);
