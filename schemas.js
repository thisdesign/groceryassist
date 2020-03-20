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
  address: String,
  date: {
    type: String,
    default: Date.now()
  },
  items: [ItemSchema]
});

module.exports = {
  OrderSchema
};
