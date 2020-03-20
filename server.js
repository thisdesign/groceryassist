// server.js
const { MongoClient } = require("mongodb");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const mongoose = require("mongoose");
require("dotenv").config({});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URI = `mongodb+srv://tylermcrobert:${PASSWORD}@covid-grocery-zg6ac.mongodb.net/covid-delivery?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("connected");
});

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  name: String,
  address: String,
  date: {
    type: String,
    default: Date.now()
  }
});

const submitOrder = () => {
  const Order = mongoose.model("orders", OrderSchema);

  const newOrder = new Order({
    name: "Adam Bagerski",
    address: "724 NE Sumner St, Portland, OR 97211"
  });

  newOrder.save(err => {
    if (err) {
      console.error(err);
    }
    console.log("success");
  });
};

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      app.render(req, res, "/b", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/a", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
