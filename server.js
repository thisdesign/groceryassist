const express = require("express");
const mongoose = require("mongoose");
const next = require("next");
require("dotenv").config({});
const { OrderSchema } = require("./schemas.js");

const port = process.env.PORT || 3000;
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

mongoose.model("orders", OrderSchema);

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
