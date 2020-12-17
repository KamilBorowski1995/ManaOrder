const router = require("express").Router();

const Order = require("../model/order.schema");
const verify = require("../function/verifyToken");

router.post("/add", verify, async (req, res) => {
  const newOrderConsumer = req.body.data[0];
  const newOrderProducts = req.body.data[1];
  const newOrderTracking = req.body.data[2];
  const order = new Order({
    consumer: newOrderConsumer,
    products: newOrderProducts,
    tracking: newOrderTracking,
  });

  try {
    const savedOrder = await order.save();
    res.send(savedOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", verify, async (req, res) => {
  const findOrder = await Order.find({});
  res.send(findOrder);
});

module.exports = router;
