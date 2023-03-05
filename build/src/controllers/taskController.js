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
const Task_1 = __importDefault(require("../models/Task"));
// Listar tareas
const findAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Task_1.default.find();
        res.status(200).json(result);
        console.log(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
});
// Agregar tarea
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTask = new Task_1.default({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false, // Si envia dato done entonces lo usa y sino lo deja false
        });
        const result = yield newTask.save();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
});
// Filtrar tarea por ID
const findTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Task_1.default.findById(id);
        if (!result) {
            return res.status(404).json({ message: `Task ${id} does not exist` });
        }
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
});
// Filtrar tareas en estado done
const findAllDoneTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Task_1.default.find({ done: true });
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
});
// Eliminar tarea
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Task_1.default.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `Task ${req.params.id} does not exist` });
        }
        res.status(200).send(`Tarea "${result.title}" Eliminada`);
    }
    catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
});
// Actualizar tarea
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body);
        if (!result) {
            return res.status(404).json({ message: `Task ${req.params.id} does not exist` });
        }
        res.status(200).send(`Tarea "${result.title}" actualizada`);
    }
    catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
});
exports.default = {
    findAllTasks,
    addTask,
    findTask,
    findAllDoneTasks,
    deleteTask,
    updateTask,
};
