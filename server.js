const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(response => {
    app.use(routes);
    app.listen(PORT, () => console.log("Server is running on port:", PORT));
  })
    .catch((err) => console.error(err));