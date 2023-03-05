"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Rutas de Tasks
const express_1 = require("express"); //Traigo solo la funcion Router
const router = (0, express_1.Router)();
const taskController_1 = __importDefault(require("../controllers/taskController"));
// Listar tareas
router.get("/", taskController_1.default.findAllTasks);
// Agregar tarea
router.post("/", taskController_1.default.addTask);
// Filtrar tareas completadas
router.get("/done", taskController_1.default.findAllDoneTasks);
// Filtrar tarea por ID
router.get("/:id", taskController_1.default.findTask);
// Eliminar tarea
router.delete("/:id", taskController_1.default.deleteTask);
// Actualizar tarea por ID
router.put("/:id", taskController_1.default.updateTask);
exports.default = router;
