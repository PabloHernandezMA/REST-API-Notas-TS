"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    //Formatea datos de la DB con mongoose
    title: {
        type: String,
        require: true,
        strim: true, //Elimina antes de guardar los espacios al principio y final del string
    },
    description: {
        type: String,
        strim: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, {
    versionKey: false,
    timestamps: true, //Agrega proiedades 'createdAt' y 'updatedAt'
});
let Task = (0, mongoose_1.model)('Task', taskSchema); //Para poder usar el schema en el resto del proyecto se debe exportar como un model, por eso esto
exports.default = Task;
