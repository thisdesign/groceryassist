const mongoose = require("mongoose")

const { Schema } = mongoose

const OrderSchema = new Schema({
  _version: {
    type: String,
    required: true
  },

  user: {
    phone: {
      type: String,
      required: true
    },

    last: {
      type: String,
      required: true
    },

    first: {
      type: String,
      required: true
    }
  },

  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
      default: "Point"
    },

    coordinates: {
      type: [Number],
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    zip: {
      type: String,
      required: true
    }
  },

  date: {
    type: Date,
    default: new Date()
  },

  status: {
    fulfilled: {
      type: Boolean,
      default: false
    },
    contact_made: {
      type: Boolean,
      default: false
    },
    date_fulfilled: {
      type: Date,
      default: new Date()
    }
  },

  items: [
    {
      text: {
        type: String,
        required: true
      },

      notes: String
    }
  ]
})

module.exports = mongoose.model("order", OrderSchema)
