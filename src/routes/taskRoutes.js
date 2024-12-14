const express = require('express');
const router = express.Router();
const Task = require('../models/task'); 

// Create a new task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Retrieve all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send(tasks);
});

// Retrieve a task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send();
  }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).send();
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send();
    res.status(204).send();
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
