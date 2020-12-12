const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nameProduct: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
