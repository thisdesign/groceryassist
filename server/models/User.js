const mongoose = require("mongoose")

const { Schema } = mongoose

const LocationSchema = new Schema({
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
})

const UserSchema = new Schema({
  _version: {
    type: String,
    required: true
  },

  phone: {
    type: Number,
    required: true
  },

  dateJoined: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model("user", UserSchema)
