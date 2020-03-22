import express, { Request, Response } from "express";
// import mongoose from "mongoose";

const next = require("next");
require("dotenv").config({});

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// /**
//  * Database
//  */

// const initDb = () => {
//   const PASSWORD = process.env.MONGODB_PASSWORD;
//   const MONGODB_URI = `mongodb+srv://tylermcrobert:${PASSWORD}@covid-grocery-zg6ac.mongodb.net/covid-delivery?retryWrites=true&w=majority`;

//   mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//   mongoose.connection.on("connected", () => {
//     console.log("Successfully connected to database");
//   });
// };

app.prepare().then(() => {
  const server = express();

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
