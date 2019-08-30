/*
  A SIMPLE TODO APPLICATION - NGTODO
  Copyright (C) 2019 'Ahmad Raza'

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var todosRouter = require(path.join(__dirname, 'routes', 'todos'))

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/* UNCOMMENT FOLLOWING IF YOU WANT TO USE SERVER FROM
  `ng serve` local run on 127.0.0.1:4200 */
/* **** *
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, req_code, id'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})
* **** */

app.use((req, _res, next) => {
  console.log(req.headers)
  next()
})

app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', todosRouter)
app.use('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
