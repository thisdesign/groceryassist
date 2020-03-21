import { NextApiRequest, NextApiResponse } from "next";

const mongoose = require("mongoose");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const Order = mongoose.connection.models.orders;
  const results = await Order.find({ _id: id });

  res.json(results[0]);
};
