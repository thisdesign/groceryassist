const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  name: String,
  address: String,
  date: {
    type: String,
    default: Date.now()
  }
});

module.exports = {
  OrderSchema
};

// const submitOrder = () => {
//   const Order = mongoose.model("orders", OrderSchema);

//   const newOrder = new Order({
//     name: "Maya Massad",
//     address: "100 NE Sumner St, Portland, OR 97211"
//   });

//   newOrder.save(err => {
//     if (err) {
//       console.error(err);
//     }
//     console.log("success");
//   });
// };
