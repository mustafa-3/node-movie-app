const router = require("express").Router();

const movieRouter = require("./movieRouter");

router.use("/movies", movieRouter);

module.exports = router;
