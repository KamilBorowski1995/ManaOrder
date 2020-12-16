const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  consumer: {
    type: Object,
    required: true,
  },
  products: {
    type: Object,
    required: true,
  },
  tracking: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
