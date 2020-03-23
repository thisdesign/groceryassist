const express = require("express");
require("isomorphic-unfetch");
const Order = require("../../models/Order");
const getAddressData = require("../../util/getAddressData");

const router = express.Router();

const CURRENT_VERSION = "0.2.1";

router.get("/", async (req, res) => {
  const orders = await Order.find({ _version: CURRENT_VERSION });
  res.json(orders);
});

router.post("/", async (req, res) => {
  const { address, city, state, zip } = req.body.location;

  const location = await getAddressData(`${address}, ${city}, ${state} ${zip}`);

  const data = {
    ...req.body,
    location,
    _version: CURRENT_VERSION
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
