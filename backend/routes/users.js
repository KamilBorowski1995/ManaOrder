const router = require("express").Router();

const User = require("../model/user.schema");

router.post("/add", async (req, res) => {
  const newConsumer = req.body.newUsers;
  const user = new User({
    firstName: newConsumer.firstName,
    lastName: newConsumer.lastName,
    password: newConsumer.password,
    login: newConsumer.login,
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

router.get("/login", async (req, res) => {
  const login = req.query.login;
  const password = req.query.password;

  const user = await User.findOne({ login: login });
  if (!user) return res.status(400).send("błąd w logowaniu");

  res.send("zalogowano");
});

router.get("/veryfToken", async (req, res) => {
  res.send("elloxd");
});

module.exports = router;
