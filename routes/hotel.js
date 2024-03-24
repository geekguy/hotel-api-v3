const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Hotel = require("../models/hotel");

const jwtVerify = (req, res, next) => {
  const headers = req.headers;
  const token = headers.authorization;
  if (!token) {
    return next();
  }
  console.log({ token });
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  console.log({ decodedToken });
  req.user = decodedToken;
  next();
};

router.use(jwtVerify);

router.get("/", async (req, res) => {
  console.log("Request received on /api/hotels");
  const hotels = await Hotel.find();
  res.send(hotels);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.query);
  const hotel = await Hotel.findById(id);
  res.send(hotel);
});

router.post("/", async (req, res) => {
  if (req.user && req.user.role === "ADMIN") {
    const hotel = req.body;
    const dbHotel = await Hotel.create(hotel);
    res.send(dbHotel);
  } else {
    res.status(403).send({ message: "Unauthorized" });
  }
});

module.exports = router;
