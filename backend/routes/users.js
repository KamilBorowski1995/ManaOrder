const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/user.schema");

router.post("/add", async (req, res) => {
  const newConsumer = req.body.newUsers;

  const exitLogin = await User.findOne({ login: newConsumer.login });
  if (exitLogin) return res.status(400).send("Taki login istnieje");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(newConsumer.password, salt);

  const user = new User({
    firstName: newConsumer.firstName,
    lastName: newConsumer.lastName,
    password: hashPassword,
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
  if (!user)
    return res.status(400).send("błąd w logowaniu - problem z loginem");

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass)
    return res.status(400).send("błąd w logowaniu - problem z hasłem");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("auth-token", token).send({ token, user: user.firstName });
});

router.get("/veryfToken", async (req, res) => {
  res.send("elloxd");
});

module.exports = router;
