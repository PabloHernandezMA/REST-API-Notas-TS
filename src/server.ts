import express from "express";
const app = express();
import morgan from "morgan";
import database from "./database";
import taskRoutes from "./routes/task.routes";
import configDataBase from "./config";

//Settings
app.set("port", configDataBase.PORT); //Se configura el puerto. Si hay una variable de entorno definida como PORT toma de alli el valor. sino toma 3000

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
  .catch((err: any) => console.log(err));
//Enciende servidor
app.listen(app.get("port"), () => {
  console.log("Escuchando en puerto:", app.get("port"));
});

export default app;
