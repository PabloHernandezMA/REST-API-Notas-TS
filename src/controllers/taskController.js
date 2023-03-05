const Task = require("../models/Task");

// Listar tareas
const findAllTasks = async (req, res) => {
  try {
    const result = await Task.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Agregar tarea
const addTask = async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false, // Si envia dato done entonces lo usa y sino lo deja false
    });
    const result = await newTask.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Filtrar tarea por ID
const findTask = async (req, res) => {
  const {id} = req.params
  try {
    const result = await Task.findById(id);
    if (!result) {
      return res.status(404).json({message: `Task ${id} does not exist`})
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Filtrar tareas en estado done
const findAllDoneTasks = async (req, res) => {
  try {
    const result = await Task.find({ done: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Eliminar tarea
const deleteTask = async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    res.status(200).send(`Tarea "${result.title}" Eliminada`);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Actualizar tarea
const updateTask = async (req, res) => {
  try {
    const result = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(`Tarea "${result.title}" actualizada`);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

module.exports = {
  findAllTasks,
  addTask,
  findTask,
  findAllDoneTasks,
  deleteTask,
  updateTask,
};
