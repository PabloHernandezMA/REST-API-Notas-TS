const express = require("express");
const app = express();
const morgan = require("morgan");
const database = require("./database");
const taskRoutes = require("./routes/task.routes");
const config = require("./config");

//Settings
app.set("port", config.PORT); //Se configura el puerto. Si hay una variable de entorno definida como PORT toma de alli el valor. sino toma 3000

//Middlewares
app.use(express.json()); //Permite procesar paquetes json
app.use(morgan("dev"));

//Routes
app.use("/api/task", taskRoutes);

//console.log(config.mongodbURL);

//Conexion a DB
database
  .connectToDb()
  .then(() => console.log("Conectado con exito a database"))
  // si hubo algun error al conectar a la bd, se loguea el mensaje en la consola.
  .catch((err) => console.log(err));
//Enciende servidor
app.listen(app.get("port"), () => {
  console.log("Escuchando en puerto:", app.get("port"));
});

module.exports = app;
