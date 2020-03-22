const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: String,
    required: false,
    default: 1
  }
});

const OrderSchema = new Schema({
  _version: {
    type: Number,
    default: 0.1
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

  items: [ItemSchema]
});

module.exports = mongoose.model("Order", OrderSchema);
