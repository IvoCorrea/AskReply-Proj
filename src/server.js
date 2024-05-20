const express = require('express')
const path = require('path')
const app = express()

const appHome = require('./routes/home')
const askTo = require('./routes/askTo')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', appHome)
app.use('/ask', askTo)

module.exports = app

