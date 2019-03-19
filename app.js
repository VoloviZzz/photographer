var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cons = require('consolidate');
var mysql = require('mysql');

// view engine setup
// app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'photographer',
  user     : 'root',
  password : '1234567'
});

connection.connect();






app.use('/', (request, response) => {
  connection.query('SELECT * from pages', (err1, rows1, fields1) => {
    if (err1) throw err1;
    connection.query('SELECT * from images', (err, rows, fields) => {
      if (err) throw err;
      console.log('The solution is: ', rows);
      response.render("index", {
        title: "Мои контакты",
        images: rows,
        pages: rows1
      });
    });
  });
  // connection.end();
});
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
