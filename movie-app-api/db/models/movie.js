const Sequelize = require("sequelize");

const sequelize = require("../../db/index");

const Movie = sequelize.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: true
  },
  detailDesc: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

module.exports = Movie;
