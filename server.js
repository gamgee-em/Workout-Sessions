const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
//const path = require('path');
const app = express();
//const routes = require('./routes');
const PORT = 3000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_db', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}, console.log('DB connected!'));
//.then((response) => app.listen(PORT, () => console.log("App running on port:", PORT)))
//    .catch((err) => console.error(err));

//app.use(routes);
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/homeRoutes.js'));

app.listen(PORT, () => console.log("App running on port:", PORT));