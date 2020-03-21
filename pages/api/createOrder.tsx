import { NextApiResponse, NextApiRequest } from "next";
import OrderSchema from "../../schemas";

const mongoose = require("mongoose");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const Order = mongoose.connection.models.orders;

  try {
    const newOrder = new Order(JSON.parse(req.body));
    const shit = await newOrder.save();
    res.status(200).json(shit);
  } catch (err) {
    // console.error(err);
    res.status(400).json(err);
  }
};
