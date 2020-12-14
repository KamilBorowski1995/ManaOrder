const router = require("express").Router();

const User = require("../model/user.schema");

router.post("/add", async (req, res) => {
  const newConsumer = req.body.newUsers;
  const user = new User({
    firstName: newConsumer.firstName,
    lastName: newConsumer.lastName,
    password: newConsumer.password,
    role: newConsumer.role,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const findUser = await User.find({});

  res.send(findUser);
});

module.exports = router;
