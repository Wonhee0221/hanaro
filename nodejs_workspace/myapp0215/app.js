var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//외부파일을 불러온다. router 폴더아래에 index.js
//users.js 파일이 있는데 각각 url 넘어오면 router들이 별도 처리를 담당한다.

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 게시판 붙히기
let boardRouter = require('./routes/board')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); //로그 출력 담당
app.use(express.json()); //json ㅊ처리 
app.use(express.urlencoded({ extended: false })); //request 객체에 body 붙힘
app.use(cookieParser()); // 쿠키사용 담당
app.use(express.static(path.join(__dirname, 'public')));
// 정적인 웹페이지 - js,css,image,단순 html
/*
파일업로드 폴더 만들어서 외부 (url로 접근가능하도록) 로 노출하기
파일을 업로드 할때는 반드시 ㅜ물리적 경로가 필요하다.
물리적 경로를 논리적 경로로 연결시켜야한다
http://127.0.0.1:3000/uploads 했을때 프로젝트 가동폴더 /uploads에 
있는 파일이 모두접근이 가능하다.
 */ 
app.use("/uploads",express.static(path.join(__dirname,'uploads')));
// 파일관리 테이블을 별도로 만들어서 관리를 한다.
//디비에 동영상이 이미지를 직접 저장할수도 있는데 우리나라는 안그런다
// 별도의 폴더를 두고 폴더에 업로드하고 디비에는 위치ㅘ 파일명등 파일을 
// 찾아올수있는 정보를 별도로 저장한다

// 게시판에 글을 쓴다 . => /board/list /board/write
// CRUD = > create.read, update, delete 단위로 별도의 파일로 가져가자
//라우터라고 부른다. 컨트롤러는 CRUD 당 하나씩

app.use('/', indexRouter); // url이 /f로 시작하는건 index.js가 처리
app.use('/users', usersRouter); // url이 /users로 시작하는건 users.js가 처리한다.
app.use('/board', boardRouter); // url이 /board 시작하는건 board.js가 처리한다.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // next라는 세번째 매개변수를 통해서
                          // 현재 함수와 물리적으로 바로 다음에 있는 함수를 호출함.
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
