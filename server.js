// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const mongoose = require("mongoose");
require("dotenv").config({});
const { OrderSchema } = require("./schemas.tsx");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * Database
 */

const PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URI = `mongodb+srv://tylermcrobert:${PASSWORD}@covid-grocery-zg6ac.mongodb.net/covid-delivery?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to database");
});

const Order = mongoose.model("orders", OrderSchema);

app.get("/api/getOrders", (req, res) => {
  Order.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});


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
