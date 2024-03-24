const express = require("express");
const router = express.Router();

const hotels = [
  {
    id: 1,
    name: "Hotel 1",
    city: "Bangalore",
    country: "India",
    price: 100,
    rooms: 50,
    available: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Hotel 2",
    city: "Bangalore",
    country: "India",
    price: 200,
    rooms: 100,
    available: 50,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Hotel 3",
    city: "Bangalore",
    country: "India",
    price: 300,
    rooms: 150,
    available: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Hotel 4",
    city: "Bangalore",
    country: "India",
    price: 400,
    rooms: 200,
    available: 150,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Hotel 5",
    city: "Bangalore",
    country: "India",
    price: 500,
    rooms: 250,
    available: 200,
    image: "https://via.placeholder.com/150",
  },
];

router.get("/", (req, res) => {
  res.send(hotels);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.query);
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id));
  res.send(hotel);
});

router.post("/", (req, res) => {
  const hotel = req.body;
  hotel.id = hotels.length + 1;
  hotels.push(hotel);
  res.send(hotel);
});

module.exports = router;
