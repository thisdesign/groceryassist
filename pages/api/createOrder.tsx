import { NextApiResponse, NextApiRequest } from "next";
import OrderSchema from "../../schemas";
import "isomorphic-unfetch";

const mongoose = require("mongoose");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const Order = mongoose.connection.models.orders;

  try {
    const data = JSON.parse(req.body);

    const { address, city, state, zip } = data.location;
    const geo = await fetch(
      `http://localhost:3000/api/geocode?address=${address}, ${city} ${state}, ${zip}`
    ).then(response => response.json());

    console.log(geo);

    const newOrder = new Order({ ...data, location: geo });
    const responseData = await newOrder.save();

    res.status(200).json(responseData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};
