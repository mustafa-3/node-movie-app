const { Movie } = require("../../db/models");

exports.getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();
  return res.status(200).json({
    success: true,
    message: "Movies retrieved successfully",
    data: movies,
  });
};
exports.getMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  if (!movie) {
    return res.status(400).json({
      success: false,
      message: "Movie couldn't found",
      data: null,
    });
  }
  return res.status(200).json({
    success: true,
    message: "Movie has been retrieved succesfully",
    data: movie,
  });
};
exports.createMovie = async (req, res) => {
  const { title, year, desc, detailDesc, imageUrl } = req.body;
  console.log(req.body);
  const movie = await Movie.create({
    title: title,
    year: year,
    desc: desc,
    detailDesc: detailDesc,
    imageUrl: imageUrl,
  });
  return res.status(200).json({
    success: true,
    message: "Movie has been created succesfully",
    data: movie,
  });
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  if (!movie) {
    return res.status(400).json({
      success: false,
      message: "Movie not found",
      data: null,
    });
  }
  await movie.destroy();
  res.status(200).json({
    success: true,
    message: "Movie has been deleted succesfully",
  });
};
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, year, desc, detailDesc, imageUrl } = req.body;
  let movie = await Movie.findByPk(id);
  if (!movie) {
    return res.status(400).json({
      success: false,
      message: "Movie not found",
      data: null,
    });
  }
  await Movie.update(
    {
      title,
      year,
      desc,
      detailDesc,
      imageUrl,
    },
    {
      where: { id },
    }
  );

  movie = await Movie.findByPk(id);

  res.status(200).json({
    success: true,
    message: "Movie has been updated succesfully",
    data: movie,
  });
};
