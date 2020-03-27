require("isomorphic-unfetch")
const express = require("express")
const User = require("../../models/User.js")
const getAddressData = require("../../util/getAddressData")

const router = express.Router()

const CURRENT_VERSION = "0.1.4"

/**
 * @route     GET api/users
 * @desc      List all users
 * @access    Public
 */

router.get("/", (req, res) => {
  User.find({ _version: CURRENT_VERSION })
    .then(users => {
      res.json({ data: users })
    })
    .catch(err => {
      res.json(err)
    })
})

/**
 * @route     POST api/orders
 * @desc      Ceate an order
 * @access    Public
 */
router.post("/", (req, res) => {
  const { phone, first, last, address } = req.body

  getAddressData(address).then(location => {
    const user = new User({
      phone,
      first,
      last,
      address,
      location,
      _version: CURRENT_VERSION
    })

    user.save((err, doc) => {
      if (err) {
        res.json({
          success: false,
          msg: "User could not be  created",
          data: err
        })
      } else {
        res.json({
          success: true,
          msg: "User successfuly created",
          data: doc
        })
      }
    })
  })
})

module.exports = router
