const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/user.schema");
const verify = require("../function/verifyToken");

router.post("/add", verify, async (req, res) => {
  const newConsumer = req.body.newUsers;

  const exitLogin = await User.findOne({ login: newConsumer.login });
  if (exitLogin) return res.status(400).send("Taki login istnieje");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(newConsumer.password, salt);

  const user = new User({
    fullName: newConsumer.fullName,
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

router.get("/", verify, async (req, res) => {
  const findUser = await User.find({});
  const newArrow = findUser.map(({ _id, fullName, role }) => ({
    _id,
    fullName,
    role,
  }));
  res.send(newArrow);
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

  res.header("auth-token", token).send({
    token,
    user: user.fullName,
    role: user.role,
  });
});

router.get("/veryfToken", verify, async (req, res) => {
  // console.log(req.user);
  res.send(req.user);
});

module.exports = router;
