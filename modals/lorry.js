const Mongoose = require("mongoose");

const lorrySchema = new Mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  entry: {
    type: Array,
  },
  total: {
    type: Number,
   
  },
});

module.exports = Mongoose.model("lorry", lorrySchema);
