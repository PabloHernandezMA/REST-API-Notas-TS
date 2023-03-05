"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const database_1 = __importDefault(require("./database"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
//Settings
app.set("port", config_1.default.PORT); //Se configura el puerto. Si hay una variable de entorno definida como PORT toma de alli el valor. sino toma 3000
app.set("mongodbURL", config_1.default.mongodbURL);
//Middlewares
app.use(express_1.default.json()); //Permite procesar paquetes json
app.use((0, morgan_1.default)("dev"));
//Routes
app.use("/api/task", task_routes_1.default);
//Conexion a DB
database_1.default
    .connectToDb()
    .then(() => console.log("Conectado con exito a database"))
    // si hubo algun error al conectar a la bd, se loguea el mensaje en la consola.
    .catch((err) => console.log(err));
//Enciende servidor
app.listen(app.get("port"), () => {
    console.log("Escuchando en puerto:", app.get("port"), "URl:", app.get("mongodbURL"));
});
exports.default = app;
