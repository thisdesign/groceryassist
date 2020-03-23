const express = require("express");
require("isomorphic-unfetch");
const Order = require("../../models/order.js");
const getAddressData = require("../../util/getAddressData");

const router = express.Router();

const CURRENT_VERSION = "0.2.4";

/**
 * @route     GET api/orders
 * @desc      List all orders
 * @access    Public
 */
router.get("/", (req, res) => {
  Order.find({ _version: CURRENT_VERSION })
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.json(err);
    });
});

/**
 * @route     GET api/orders/:id
 * @desc      Get order by id
 * @access    Public
 */
router.get("/:id", (req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      res.json(order);
    })
    .catch(err => {
      res.json({ err });
    });
});

/**
 * @route     POST api/orders
 * @desc      Ceate an order
 * @access    Public
 */
router.post("/", (req, res) => {
  const { address, city, state, zip } = req.body.location;

  getAddressData(`${address}, ${city}, ${state} ${zip}`).then(location => {
    const data = {
      ...req.body,
      location,
      _version: CURRENT_VERSION
    };

    const order = new Order(data);
    order.save((err, doc) => {
      if (err) {
        res.json({
          success: false,
          msg: "Could not create order.",
          data: err
        });
      } else {
        res.json({
          success: true,
          msg: "Order successfuly created",
          data: doc
        });
      }
    });
  });
});

module.exports = router;
