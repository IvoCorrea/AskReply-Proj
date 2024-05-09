const express = require('express');
const app = express();

const appHome = require('./routes/home')

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use('/', appHome)

module.exports = app;