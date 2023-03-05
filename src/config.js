// Este archivo carga las variables de entorno del proyecto, aquellas que esten en .env
const { config } = require("dotenv");
config();

module.exports = {
  mongodbURL: process.env.DB_CONNECTION_STRING,
  PORT: process.env.PORT || 3000,
};
