const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const accoutRouter = require("./routes/api/account.js");

const port = 3000;
const uri =
  "mongodb+srv://abbanebaraa48:baraa2002@cluster0.7qa5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(uri, {
    dbName: "project",
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use("/api/account", accoutRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
