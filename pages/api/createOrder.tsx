import OrderSchema from "../../schemas";

const mongoose = require("mongoose");

export default async (req, res) => {
  const Order = mongoose.connection.models.orders;

  const data = {
    // name: "tyler mcrobert",
    address: "4022 n albina ave",
    city: "portland",
    state: "OR",
    zip: 97227,
    items: [
      {
        name: "carrots",
        quantity: 4
      }
    ]
  };

  try {
    const newOrder = new Order(data);
    const shit = await newOrder.save();
    res.status(200).json(shit);
  } catch (err) {
    res.status(400).json(err);
  }
};
