const express = require("express");
const indexRouter = require("./routes/index");
const app = express();
const sequelize = require("./db/index");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", indexRouter);

// const Movie = require("./db/models/movie");
const port = 5000;

app.listen(port, (req, res) => {
  console.log(`Server is listening on ${port} port`, new Date());
});

// const syncDb = async () => {
//   try {
//     await sequelize.sync({ force: true });
//   } catch (error) {
//     console.log(error);
//   }
// };

// syncDb();
