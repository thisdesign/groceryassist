require("dotenv").config();

const PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URI = `mongodb+srv://tylermcrobert:${PASSWORD}@covid-grocery-zg6ac.mongodb.net/covid-delivery?retryWrites=true&w=majority`;

module.exports = {
  mongoURI: MONGODB_URI
};
