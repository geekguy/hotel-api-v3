const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  city: String,
  country: String,
  price: Number,
  rooms: Number,
  available: Number,
  image: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
