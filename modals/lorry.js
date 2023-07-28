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
  entry: [
    {
      date: {
        type: Date,
      },
      income: {
        type: Number,
      },
      maintaince: {
        type: Number,
      },
      description: {
        type: String,
      },
      profit: {
        type: Number,
      },
      code:{
        type:Number,
        unique: true
      }
    },
  ],
  total: {
    type: Number,
  },
});

module.exports = Mongoose.model("lorry", lorrySchema);
