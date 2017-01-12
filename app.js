'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const api = require('./routes')
const gallery = require('./routes/gallery')
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', api)
app.use('/gallery', gallery)

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!!')
})
// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  console.log(err.status + ' ' + err.message)
  res.render('error', {message: err.message, status: err.status})
})

module.exports = app
