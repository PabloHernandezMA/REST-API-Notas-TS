"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Conexion a base de datos
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
function connectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // chequea si la variable de entorno esta definida.
            if (config_1.default.mongodbURL) {
                // intenta conectar con la db.
                const db = yield mongoose_1.default.connect(config_1.default.mongodbURL);
                console.log("Conectado a:", db.connection.name);
            }
            else {
                // en caso que la variable no se haya cargado correctamente, loguea un mensaje en la consola.
                console.log("Connection string is missing");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = { connectToDb };
