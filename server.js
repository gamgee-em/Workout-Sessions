const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const app = express();
const routes = require('./routes');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/workout_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((result) => app.listen(3000, () => console.log("App running on port 3000!")))
  .catch((err) => console.error(err));

app.use(routes);