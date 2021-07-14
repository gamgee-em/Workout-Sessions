const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const app = express();
const routes = require('./routes');
const PORT = 3000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);
/* app.use(require('./routes/homeRoutes'));
app.use(require('/api/workouts', './routes/apiRoutes'));  */

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((response) => app.listen(PORT, () => console.log("App running on port:", PORT)))
    .catch((err) => console.error(err));