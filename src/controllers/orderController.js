const { calculatePackages } = require("../utils/packaging");
const orders = require("../models/order");

exports.createOrder = (req, res) => {
  const selectItems = req.body.items; //array of item IDs

  //filter orders based on selected item ID
  const orderItems = orders.filter((item) => selectItems.includes(item.id));

  // Check if the filtered orderItems array is empty
  // if (orderItems.length === 0) {
  //   return res.status(400).json({ success: false, message: "Invalid Request" });
  // }

  //calculate packages based on the items
  const packages = calculatePackages(orderItems);
    res.status(200).json({ success: true, packages });
};
