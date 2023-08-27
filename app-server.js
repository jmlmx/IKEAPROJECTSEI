const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')


/* Middleware */
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use

app.use('api/users', require('./routes/api/users'))
