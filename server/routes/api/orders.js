const express = require("express")
require("isomorphic-unfetch")
const Order = require("../../models/order.js")
const getAddressData = require("../../util/getAddressData")

const router = express.Router()

const CURRENT_VERSION = "0.3"

/**
 * @route     GET api/orders
 * @desc      List all orders
 * @access    Public
 */

const getStatus = status => {
  if (status === "open")
    return {
      "status.fulfilled": [false, undefined]
    }
  if (status === "closed")
    return {
      "status.fulfilled": true
    }
  return {}
}

router.get("/", (req, res) => {
  const { radius = 10, latlng, limit = 0, status = "open" } = req.query

  const orderQuery = Order.find({
    _version: CURRENT_VERSION,
    ...getStatus(status)
  })

  if (latlng) {
    const [lat, lng] = latlng.split(",")
    orderQuery.where("location").within({
      center: [lng, lat],
      radius: parseFloat(radius)
    })
  }

  orderQuery
    .sort({ date: -1 })
    .limit(parseFloat(limit))
    .then(orders => {
      res.json(orders)
    })
    .catch(err => {
      res.json(err)
    })
})

/**
 * @route     GET api/orders/open
 * @desc      List all orders
 * @access    Public
 */
router.get("/open/", (req, res) => {
  Order.find({
    _version: CURRENT_VERSION
  })
    .then(orders => {
      res.json(orders)
    })
    .catch(err => {
      res.json(err)
    })
})

/**
 * @route     GET api/orders/:id
 * @desc      Get order by id
 * @access    Public
 */
router.get("/:id", (req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      res.json(order)
    })
    .catch(err => {
      res.json({ err })
    })
})

/**
 * @route     PUT api/orders/:id/complete
 * @desc      Mark an order complete
 * @access    Public
 */
router.put("/:id/complete", async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id })
  order.status.fulfilled = true
  order.status.contact_made = true

  order.save((err, doc) => {
    if (err) {
      res.json({
        success: false,
        msg: "Could not update order.",
        data: err
      })
    } else {
      res.json({
        success: true,
        msg: "Successfully updated order.",
        data: doc
      })
    }
  })
})

/**
 * @route     POST api/orders
 * @desc      Ceate an order
 * @access    Public
 */
router.post("/", (req, res) => {
  const {
    address,
    city,
    state,
    zip,
    phone,
    first,
    last,
    ...formInput
  } = req.body

  getAddressData(`${address}, ${city}, ${state} ${zip}`)
    .then(({ lat, lng, ...location }) => {
      const data = {
        location: {
          coordinates: [lng, lat],
          ...location
        },
        user: { phone, first, last },
        ...formInput,
        _version: CURRENT_VERSION
      }

      const order = new Order(data)
      order.save((err, doc) => {
        if (err) {
          res.json({
            success: false,
            msg: "Could not create order.",
            data: err
          })
        } else {
          res.json({
            success: true,
            msg: "Order successfuly created",
            data: doc
          })
        }
      })
    })
    .catch(err => {
      console.log(err)

      res.json({
        success: false,
        msg: "Invalid address.",
        data: err
      })
    })
})

module.exports = router
