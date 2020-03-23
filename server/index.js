/* eslint-disable no-console */

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../config/keys").mongoURI;
const orders = require("./routes/api/orders");

const port = process.env.PORT || 5000;

const app = express();

// connect to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error(err));

// middleware
app.use(bodyParser.json());

// routes
app.use("/api/orders", orders);

// listen on port
app.listen(port, () => console.log(`Server running on port ${port}...`));
