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
  name: {
    type: String,
    required: true
  },

  location: {
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

module.exports = {
  OrderSchema
};
