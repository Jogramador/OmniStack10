const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app =express();


mongoose.connect('mongodb+srv://Jogramador:html123456789@cluster0-t4dfm.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
app.use(express.json());

app.use(routes);

app.listen(5555);