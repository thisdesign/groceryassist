import mongoose from "mongoose";

require("dotenv").config({});

const initDb = async () => {
  if (mongoose.connection.readyState === 0) {
    const PASSWORD = process.env.MONGODB_PASSWORD;
    const MONGODB_URI = `mongodb+srv://tylermcrobert:${PASSWORD}@covid-grocery-zg6ac.mongodb.net/covid-delivery?retryWrites=true&w=majority`;

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Initialized DB");
  }
};

export default initDb;
