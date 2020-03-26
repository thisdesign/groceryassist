const express = require("express")
require("isomorphic-unfetch")
require("dotenv").config({})

const router = express.Router()

/**
 * @route     GET api/location
 * @desc      get location data
 * @access    Public
 */

const apiKey = process.env.GEOCODE_API_KEY

router.get("/", (req, res) => {
  const { query } = req._parsedUrl

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&${query ||
      ""}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.error_message) {
        res.json(data)
      } else {
        const firstResult = data.results[0]

        if (firstResult) {
          const [
            number,
            street,
            region,
            city,
            cty,
            state,
            country,
            zip
          ] = firstResult.address_components

          const parsed = {
            ...data.results[0].geometry.location,
            address: `${number.short_name} ${street.short_name}`,
            city: city.short_name,
            state: state.short_name,
            zip: zip.short_name
          }

          res.json(parsed)
        }
      }
    })
})

router.get("/predictions", (req, res) => {
  const { input } = req.query

  if (!input) {
    res.json({ error: "include input" })
  } else {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}&sessiontoken=1234567890`

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        res.json({
          predictions: data.predictions.map(item => ({
            full: item.description,
            main: item.structured_formatting.main_text,
            secondary: item.structured_formatting.secondary_text
          }))
        })
      })
      .catch(err => {
        res.json({ err })
      })
  }
})

module.exports = router
