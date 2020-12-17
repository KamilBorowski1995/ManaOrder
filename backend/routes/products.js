const router = require("express").Router();

const Product = require("../model/product.schema");
const verify = require("../function/verifyToken");

router.post("/add", verify, async (req, res) => {
  const newConsumer = req.body.newConsumer;
  const product = new Product({
    nameProduct: newConsumer.nameProduct,
    cost: newConsumer.cost,
  });

  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", verify, async (req, res) => {
  const findProduct = await Product.find({});

  res.send(findProduct);
});

module.exports = router;
