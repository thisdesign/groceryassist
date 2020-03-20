import OrderSchema from "../../schemas";

const mongoose = require("mongoose");

export default async (req, res) => {
  const Order = mongoose.connection.models.orders;
  const results = await Order.find({});
  res.json(results);
};
