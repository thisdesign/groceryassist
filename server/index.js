const express = require("express");
const mongoose = require("mongoose");
const next = require("next");

require("dotenv").config({});

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const router = express.Router();

// /**
//  * Database
//  */

const PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URI = `mongodb+srv://tylermcrobert:${PASSWORD}@covid-grocery-zg6ac.mongodb.net/covid-delivery?retryWrites=true&w=majority`;
const db = mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// const initDb = () => {

//   mongoose.connection.on("connected", () => {
//     console.log("Successfully connected to database");
//   });
// };

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

// https://dev.to/aurelkurtula/introduction-to-nextjs---adding-express-and-mongo-to-the-project-2d38
// https://levelup.gitconnected.com/set-up-next-js-with-a-custom-express-server-typescript-9096d819da1c
