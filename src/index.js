const express = require("express");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("Backend is working well!!!");
});

app.use("/api/orders", orderRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
