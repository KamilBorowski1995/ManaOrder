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

router.get("/order", verify, async (req, res) => {
  const findOrder = await Order.find({ _id: req.query.orderId });
  res.send(findOrder);
});

router.put("/:id", verify, async (req, res) => {
  console.log(req.params.id);
  console.log(req.body.tracking);
  const editOrder = await Order.updateOne(
    { _id: req.params.id },
    {
      $set: { tracking: req.body.tracking },
    }
  );
  res.send(editOrder);
});

module.exports = router;
