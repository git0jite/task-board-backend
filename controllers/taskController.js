const Task = require('../models/Task');

exports.getTasksByBoard = async (req, res) => {
  const tasks = await Task.find({ boardId: req.params.id });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, boardId: req.params.id });
  await task.save();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  
  res.sendStatus(204);
};
