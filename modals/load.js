const Mongoose = require("mongoose");

const loadSchema = new Mongoose.Schema({
  lorryNumber: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  detailes: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  recived: {
    type: Number,
    required: true,
  },
});

module.exports = Mongoose.model("load", loadSchema);
