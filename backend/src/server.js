const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack10:apocalipse16@cluster0-q1jfy.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true ,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);