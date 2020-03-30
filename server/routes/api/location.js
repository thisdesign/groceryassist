const express = require("express")
require("isomorphic-unfetch")
require("dotenv").config({})
const qs = require("qs")

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
          const verboseParsed = firstResult.address_components.reduce(
            (acc, cur, i) => {
              const key = cur.types[0]
                .replace("locality", "city")
                .replace("administrative_area_level_2", "county")
                .replace("administrative_area_level_1", "state")
                .replace("postal_code", "zip")
              return { ...acc, [key]: cur.short_name }
            },
            {}
          )
          const parsed = {
            ...firstResult.geometry.location,
            address:
              verboseParsed.street_number && verboseParsed.route
                ? `${verboseParsed.street_number} ${verboseParsed.route}`
                : null,
            ...verboseParsed
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
    const PARAMS = qs.stringify({
      key: apiKey,
      input,
      sessiontoken: 1234567890
    })

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?${PARAMS}`

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
