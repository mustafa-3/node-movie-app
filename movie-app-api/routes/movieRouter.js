const router = require("express").Router();
const catchAsync = require("../utils/catchAsync");

const movieController = require("../controllers/movie/movieController");

router
  .route("/")
  .get(catchAsync(movieController.getAllMovies))
  .post(catchAsync(movieController.createMovie));

  router
  .route("/:id")
  .delete(catchAsync(movieController.deleteMovie))
  .put(catchAsync(movieController.updateMovie))
  .get(catchAsync(movieController.getMovie))


module.exports = router;
