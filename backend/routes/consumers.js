const router = require("express").Router();

const Consumer = require("../model/consumer.schema");
const verify = require("../function/verifyToken");

router.post("/add", verify, async (req, res) => {
  const newConsumer = req.body.newConsumer;
  const consumer = new Consumer({
    firstName: newConsumer.firstName,
    lastName: newConsumer.lastName,
    companyName: newConsumer.companyName,
    NIP: newConsumer.NIP,
    street: newConsumer.street,
    number: newConsumer.number,
    code: newConsumer.code,
    city: newConsumer.city,
    phone: newConsumer.phone,
    email: newConsumer.email,
    notes: newConsumer.notes,
  });

  try {
    const savedConsumer = await consumer.save();
    res.send(savedConsumer);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", verify, async (req, res) => {
  const findConsumer = await Consumer.find({});

  res.send(findConsumer);
});

module.exports = router;
