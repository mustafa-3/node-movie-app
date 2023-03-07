const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const connect = async (dbName) => {
  try {
    await sequelize.authenticate();
    console.log(
      `Connection to ${dbName} established successfully.`,
      new Date()
    );
  } catch (error) {
    console.error(`Unable to connect to the ${dbName}:`, error);
  }
};

const syncDb = async () => {
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log(error);
  }
};

connect("nodemoviedb");
syncDb();

module.exports = sequelize;
