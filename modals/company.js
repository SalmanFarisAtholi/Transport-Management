const Mongoose = require("mongoose");

const companySchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  out: {
    type: Number,
    required: true,
  },
  in: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Mongoose.model("company", companySchema);
