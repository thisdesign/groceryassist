const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  _version: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
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
    type: String,
    default: Date.now()
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
      }
    }
  ]
});

module.exports = mongoose.model("order", OrderSchema);
