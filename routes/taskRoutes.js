const express = require('express');
const router = express.Router();
const { getTasksByBoard, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/boards/:id/tasks', async (req, res) => {
  const { search } = req.query;
  const query = { boardId: req.params.id };

  if (search) {
    query.title = { $regex: search, $options: 'i' }; 
  }

  const tasks = await require('../models/Task').find(query);
  res.json(tasks);
});
router.post('/boards/:id/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
