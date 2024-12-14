const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/taskRoutes'); 
const app = express();
const port = 3002; 

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/task_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Use the task routes
app.use('/api/taskRoutes', taskRoutes); // Prefix all routes with /api

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
