import express, { response } from "express"
import ejs from "ejs"
// 모듈import
let app = express(); //express 객체생성
//이 아래 두개를 미들웨어 라고한다.
// 미들웨어 - 중간에 여기 거쳐서 온다, 함수들이 전부 실행해서 각자자기 업무만 처리한다.
app.use(express.json())
app.use(express.urlencoded({extended : false}))




// 모든 응답처리를 담당한다. (get이든 post 이든)
// use 함수에 파라미터로 콜백함수를 준다.
// (request,response,next); 세번째 매개변수인 next는 체인을 만들어서
// 이번함수 => 다음한수 => 그다음함수 식으로 여러번 거쳐서 처리될 때 유용하다.
app.use("/",(request,response,next)=>{
  console.log("////////////")
  next() // 밑에 있는 url이 없는 함수한테 던짐 # 진짜 밑에것을 던지는거임 실제 물리적으로 바로 아래있는 test가 실행된다.
});
app.use("/test",(request,response,next)=>{
  console.log("/test")
  next()
});
// 어떤 경우에든 , url은 중복되면 안된다.
// http://127.0.0.1:4000/get
app.get("/get",(request,response)=>{
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  response.end( "<h1>get 방식</h1>" )
}) 
//json 전송하기
app.get("/data",(request,response)=>{
  let data = {product_name: "새우깡",product_price: 4000 }
  // response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  response.send( data ) // node에서 제공하는게 아니고 express가 제공한다.
  // send는 보내는 데이터의 형태에 따라 자동으로 지정한다.
}) 
// request 객체를 타고 오는 정보 : get-url.parse , post: URLParmSearch 사용

//http://127.0.0.1:4000/add?x=5&y=4&mag=test
app.get("/add",(request,response)=>{
  // get 방식으로 파라미터 전달시 : request 객체에 query에 json형태로 달려온다.
  console.log(typeof request.query, request.query)
  let x = request.query.x;
  let y = request.query.y;
  response.send({"x":x,"y":y,"result": parseInt(x)+parseInt(y)})
}) 
//최신 url : http://127.0.0.1:4000/add2/5/7/test 이렇게 값만 넘김
app.get("/add2/:x/:y/:msg",(request,response)=>{
  // get 방식으로 파라미터 전달시 : request 객체에 query에 json형태로 달려온다.
  console.log(typeof request.params, request.params)
  let x = request.params.x;
  let y = request.params.y;
  let msg = request.params.msg;
  response.send({"x":x,"y":y,"result": parseInt(x)+parseInt(y),"msg":msg})
}) 
/*
post 방식은 body 부분을 따로 받아서 처리작업을 해야한다.
bodyparser를 제공해준다. 별도로 설치하고 
모든 요청에 bodyParser를 통과했어야했는데 이게 내장형으로 바뀌어서 설치가 불필요해짐
express 프레임워크에 bodyParser가 내장이 되었음.
app.use(express.json())
app.use(express.urlencoded({extended : false}))
이 두 구문이 있어야 bodyParser가 동작을 한다. 보통 맨위에 시작할 때 선언을 함

*/



// 방법은 2개.
// html파일 만들어서 form 태그 통해서 post 를 전송하거나
// curl 이나 postman으로 접근해야한다.
// 브라우저 url은 무조건 접근불가 get방식만 가능
app.post("/post",(request,response)=>{
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  response.end( "<h1>post 방식</h1>" )
}) 

// postman 으로 해야한다.
//  JSON으로 보내던 x-www-form-urlencoded방식을 사용해서 보내든 ㅍ처리방식이 동일하다.
// 스프링부트의 경우 @RequestBody = > JSon 을 처리하고자 할때
//  x-www-form-urlencoded는 그냥받음
/*
 get : header에 모든 정보를(url방식 2개.)
      1. add?x=4&y=5  => query
      2. add/4/5      => param
 post : header에 간단한 url말고는 안보낸다. body에 데이터를 전송한다.
        1. multipart/form-data : 파일 업로드시 form태그의 post + enctype="multipart/form-data"
        2. x-www-form-urlencoded : form 태그의 post
        3. json 방식이 있다. : 데이터를 json형태로 전송한다. 직접 json 형태로 데이터를 만들어야한다.
*/
app.post("/userinfo",(request,response)=>{
  let name = request.body.name;
  let age = request.body.age;
  // response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  //send 함수가 적절한 헤더를 알아서 보내준다.writeHead 안해도됨.
  response.send({"name":name,"age":age})
}) 
// url 요청이 없을 경우에 사용한다. - 맨밑에 두어야함,
app.use((request,response)=>{
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  response.end( "<h1>Hi Exptress</h1>" )
});
app.listen(4000,()=>{
  console.log("server start http://127.0.0.1:4000")
})