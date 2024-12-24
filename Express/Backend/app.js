var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//customer logger
let customLogger = require('./middleware/logger');
var indexRouter = require('./routes/index');
//for users
var usersRouter = require('./routes/users');
//registering router
var todoRouter = require('./routes/todos');
//
let movieRouter = require('./routes/movies');
let reviewRouter = require('./routes/reviews');
//cors
const cors = require("cors");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//my custome logger
app.use(customLogger.logger);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//database
const { db } = require("./config/database");
//mongoose
const mongoose = require('mongoose');
//middleware
let auth = require('./middleware/auth')

app.use('/', indexRouter);
//for users
app.use('/api/users', usersRouter);
//adding route
app.use('/api/movies', movieRouter);
// later for verifyUserToken
app.use('/api/reviews',reviewRouter);
// app.use('/api/todos',auth.verifyUserToken,todoRouter);
app.use('/api/todos',todoRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//Mongoose connection
mongoose.connect(db,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>console.log("MongoDB connected")).catch(err=>console.log(err))
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
