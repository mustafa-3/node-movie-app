const router = require("express").Router();
const catchAsync = require("../utils/catchAsync")

const movieController = require("../controllers/movie/movieController");

router.route("/")
.get(
  catchAsync(movieController.getAllMovies)
)

module.exports = router;
