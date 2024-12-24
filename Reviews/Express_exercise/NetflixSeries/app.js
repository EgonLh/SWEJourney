var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//registering route > series
var seriesRouter = require('./routes/series'); //=> series registered

//registering route > movies
var movieRouter = require('./routes/movies');  //=> movies registered
var app = express();


//mongo database & mongoose setup
const {db} = require('./config/database');
const mongoose = require('mongoose');
mongoose.connect(db,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(
    ()=>console.log("MongoDB is connected")).catch(err=>console.log(err)
)
//Bootstrap --add
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

//box incon --add
app.use('/boxicons', express.static(path.join(__dirname, 'node_modules/boxicons')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

//route setup => handle servies
app.use('/api/series',seriesRouter)
//route setup => handle movies
app.use('/api/movies',movieRouter)

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
