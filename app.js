const express = require("express");
const app = express();
const hotelRouter = require("./routes/hotel");

app.use(express.json());

app.use("/api/hotels", hotelRouter);

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
