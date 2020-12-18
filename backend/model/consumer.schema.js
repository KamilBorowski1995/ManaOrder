const mongoose = require("mongoose");

const consumerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  consumerType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Consumer", consumerSchema);
