//Conexion a base de datos
const mongoose = require("mongoose");
const config = require("./config");

async function connectToDb() {
try {
    // chequea si la variable de entorno esta definida.
    if (config.mongodbURL) {
      // intenta conectar con la db.
      const db = await mongoose.connect(config.mongodbURL);
      console.log("Conectado a:", db.connection.name);
    } else {
      // en caso que la variable no se haya cargado correctamente, loguea un mensaje en la consola.
      console.log("Connection string is missing");
    }
} catch (error) {
  console.log(error)
}
}

module.exports = { connectToDb };
