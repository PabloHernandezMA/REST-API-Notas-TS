//Rutas de Tasks
const { Router } = require("express"); //Traigo solo la funcion Router
const router = Router();
const Task = require("../models/Task");
const TaskController = require("../controllers/taskController");

// Listar tareas
router.get("/", TaskController.findAllTasks);

// Agregar tarea
router.post("/", TaskController.addTask);

// Filtrar tareas completadas
router.get("/done", TaskController.findAllDoneTasks);

// Filtrar tarea por ID
router.get("/:id", TaskController.findTask);

// Eliminar tarea
router.delete("/:id", TaskController.deleteTask);

// Actualizar tarea por ID
router.put("/:id", TaskController.updateTask);

module.exports = router;
