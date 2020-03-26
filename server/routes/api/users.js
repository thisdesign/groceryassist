require("isomorphic-unfetch")
const express = require("express")
const User = require("../../models/User.js")

const router = express.Router()

const CURRENT_VERSION = "0.1.1"

/**
 * @route     GET api/users
 * @desc      List all users
 * @access    Public
 */

router.get("/", (req, res) => {
  User.find()
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
  const { phone } = req.body

  const user = new User({
    phone,
    _version: CURRENT_VERSION
  })
  user.save((err, doc) => {
    if (err) {
      res.json({ err })
    } else {
      res.json({ doc })
    }
  })
})

module.exports = router
