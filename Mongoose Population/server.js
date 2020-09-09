// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require("body-parser")
// Mongoose setup
const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/bookPopulation', { useNewUrlParser: true })
mongoose.connect('mongodb://localhost/planetsDB', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)

const port = 4202
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
