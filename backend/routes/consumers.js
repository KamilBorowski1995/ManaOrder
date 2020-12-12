const router = require("express").Router();

const Consumer = require("../model/consumer.schema");

router.post("/add", async (req, res) => {
  const consumer = new Consumer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    NIP: req.body.NIP,
    street: req.body.street,
    number: req.body.number,
    code: req.body.code,
    city: req.body.city,
    phone: req.body.phone,
    email: req.body.email,
    notes: req.body.notes,
  });

  try {
    const savedConsumer = await consumer.save();
    res.send(consumer);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
