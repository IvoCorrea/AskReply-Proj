const express = require('express')
const app = express()
const path = require('path')

const appHome = require('./routes/home')
const askTo = require('./routes/askTo')
const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', appHome)
app.use('/ask', askTo)

module.exports = app

