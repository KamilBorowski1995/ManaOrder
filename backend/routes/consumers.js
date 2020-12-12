const router = require("express").Router();

const Consumer = require("../model/consumer.schema");

router.post("/add", async (req, res) => {
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

router.get("/", async (req, res) => {
  const findUser = await Consumer.find({});

  res.send(findUser);
});

module.exports = router;
