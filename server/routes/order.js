const express = require("express");
const Order = require("../models/order");

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id).catch(err => {
    res.json({ err });
  });

  res.json(order);
});

module.exports = router;
