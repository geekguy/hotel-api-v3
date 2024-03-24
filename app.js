require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const hotelRouter = require("./routes/hotel");
const userRouter = require("./routes/user");

console.log(`Mongo URL = ${process.env.MONGO_URL}`);
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`Connected to MongoDB`);
});

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`${req.method} received on ${req.url}`);
  next();
};

const anotherLogger = (req, res, next) => {
  console.log(`This is another logger`);
  next();
};

app.use(logger);
app.use(anotherLogger);

app.use("/api/hotels", hotelRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
