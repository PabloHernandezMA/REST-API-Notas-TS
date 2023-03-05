"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Este archivo carga las variables de entorno del proyecto, aquellas que esten en .env
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    mongodbURL: process.env.DB_CONNECTION_STRING,
    PORT: process.env.PORT || 3000,
};
