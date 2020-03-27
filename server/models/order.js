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
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    },
    address: {
      type: String,
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
      type: Number,
      required: true
    }
  },

  date: {
    type: Date,
    default: new Date()
  },

  status: {
    open: {
      type: Boolean,
      default: true
    },
    fulfilled: {
      type: Boolean,
      default: false
    },
    date_fulfilled: {
      type: Date,
      default: null
    },
    volunteer_phone: {
      type: Number,
      default: null
    }
  },

  items: [
    {
      name: {
        type: String,
        required: true
      },
      qty: {
        type: Number,
        required: false,
        default: 1
      },

      unit: {
        type: String,
        required: false,
        default: "ea"
      },

      notes: String
    }
  ]
})

module.exports = mongoose.model("order", OrderSchema)
