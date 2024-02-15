var express = require('express');
var router = express.Router();

/* GET home page. */
//데이터 준비
let boardList = [
  {id:1,title:"제목1",writer:"작성자1",contents:"내용1",wdate:"2024-02-15"},
  {id:2,title:"제목2",writer:"작성자2",contents:"내용2",wdate:"2024-02-15"},
  {id:3,title:"제목3",writer:"작성자3",contents:"내용3",wdate:"2024-02-15"},
  {id:4,title:"제목4",writer:"작성자4",contents:"내용4",wdate:"2024-02-15"},
  {id:5,title:"제목5",writer:"작성자5",contents:"내용5",wdate:"2024-02-15"}

]
router.get('/', function(req, res, next) {
  // views/board/board_list.ejs => views 붙어잇고 뒤에 ejs붙고
  res.render('board/board_list', {});
  // res.send("board임")
  res.redirect('board/list') // 다른페이지로 이동
  // 왜 직접호출하지않을까? 왜냐면 request 객체
  

});
router.get('/list', function(req, res, next) {
  // views/board/board_list.ejs => views 붙어잇고 뒤에 ejs붙고
  res.render('board/board_list', {boardList:boardList});
  // res.send("board임")
});
// board/view/1
router.get('/view/:id', function(req, res, next) {
  let id = req.params.id // view/1 => prams로 받아야한다.
                        //  view?id=1 => query로 받아야한다.
  board =boardList.find((board)=>board.id == id) //검색
  if(board)
    res.render('board/board_view', {board:board});
  else
    res.send("<h1>데이터를 찾을 수 없습니다.</h1>")
});

router.use('/write', function(req, res, next) {
  if(req.method=="GET"){
    res.render('board/board_write');
    return;
  }
  let body =req.body; //json이라서 
  //마지막 데이ㅣ터의 id값 알아와서 하나증가
  let id = boardList[boardList.length-1].id;
  id = parseInt(id)+1 //배열의 인덱스 증가
  let today = new Date() //자바스크립트로 현재 날짜와 시간 저장

  console.log(body)
  body = {...body,id:id, wdate:today.toLocaleDateString()}; //파라미터로 받은 json 원래 데이터에 항목하나만 추가한다.
  boardList.push(body);

  //지금까지 request객체로 받았음, request무효화하고 페이지이동을해야한다.
  // redirect로 이동하자.
  res.redirect("/board/list")
});


// 중요 => 외부에서 접근이 가능하다. 이라인 절대 삭제 하면안된다.
module.exports = router;
