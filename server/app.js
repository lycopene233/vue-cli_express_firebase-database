var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors'); // 开启cors
var debug = require('debug')('my-application'); // debug模块（监听用）

var indexRouter = require('./routes/index');
var api = require('./routes/api');
// var usersRouter = require('./routes/users');

var app = express();

// cors设置
app.use(cors({
	origin: 'http://127.0.0.1:8081', // 前端接口，8080被GW占了所以是8081……
	methods: ['GET', 'POST'],
	exposedHeaders: ['Authorization']
}));

// 设定监听端口
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', api);
// app.use('/users', usersRouter);

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

// ↓ 这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来
// module.exports = app;

// 启动监听  
var server = app.listen(app.get('port'), function() {  
	debug('Express server listening on port ' + server.address().port);  
});  
