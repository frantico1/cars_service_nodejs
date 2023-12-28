const express = require("express");
const app = express();
const mongoose = require("mongoose");
// var cors = require('cors');
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect(
//   `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.cx2khw6.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
mongoose.connect(
  `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.cx2khw6.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
),
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Connected  to database succes!");
    }
  };

const productRouter = require("./routes/products");
const userBusinessRouter = require("./routes/userBusiness");
const carsRouter = require("./routes/cars");
const userRouter = require("./routes/users");

app.get("/", (req, res) => {
  res.status(200).end("Ana Sayfa");
});

app.use("/products", productRouter);
app.use("/userbusiness", userBusinessRouter);
app.use("/cars", carsRouter);
app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("5000 portu dinleniyor...");
});
