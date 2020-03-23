import mongoose from "mongoose";

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: false,
    default: 1
  }
});

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

  items: [ItemSchema]
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
