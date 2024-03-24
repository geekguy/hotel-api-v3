const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel");

router.get("/", async (req, res) => {
  console.log("Request received on /api/hotels");
  const hotels = await Hotel.find();
  res.send(hotels);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.query);
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id));
  res.send(hotel);
});

router.post("/", async (req, res) => {
  const hotel = req.body;
  const dbHotel = await Hotel.create(hotel);
  res.send(dbHotel);
});

module.exports = router;
