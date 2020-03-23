const express = require("express");
require("isomorphic-unfetch");
const Order = require("../models/order");
const getAddressData = require("../util/getAddressData");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("__________________________________");
  const orders = await Order.find({});
  res.json(orders);
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const { address, city, state, zip } = req.body.location;

  const location = await getAddressData(`${address}, ${city}, ${state} ${zip}`);

  const data = {
    ...req.body,
    location,
    _version: 0.1
  };

  const order = new Order(data);
  order.save(err => {
    res.json(err || data);
  });
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id).catch(err => {
    res.json({ err });
  });

  res.json(order);
});

module.exports = router;
