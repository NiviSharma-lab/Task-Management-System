const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/tasks', taskRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
