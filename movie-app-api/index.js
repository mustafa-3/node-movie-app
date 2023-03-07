const express = require("express");
const app = express();
const sequelize = require("./db/index")
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.listen(port, (req, res) => {
  console.log(`Server is listening on ${port} port`, new Date());
});
