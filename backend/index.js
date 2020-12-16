const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const consumersRoute = require("./routes/consumers");
const productsRoute = require("./routes/products");
const usersRoute = require("./routes/users");
const ordersRoute = require("./routes/orders");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Zalogowano do bazy danych")
);

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/consumers", consumersRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", ordersRoute);

app.listen(5000, () =>
  console.log("serwer włączony na porcie 5000: http://localhost:5000")
);
