// requset로 다시 만들기
const http = require("http");
const host = "127.0.0.1"
const port = 4000;
const fs = require( "fs" );
const url = require("url"); 
const path = require("path");
const { query } = require("express");

let server = http.createServer((req,res)=>{
  console.log(req.method)
  console.log( req.url )
  console.log( url.parse( req.url) ) 

  let pathName = url.parse( req.url).pathname; 
  if (req.method == "GET" ){
    let query =url.parse( req.url, true).query; //공통사항이라 밖으로 빼줌.
  if (pathName=="/")
  {
      //JSON -> 요소에 접근할때 ob["키값"] 또는 ob.키값
      // 단, 키값에 하이픈이 들어있으면 이때는 무조건 대괄호로 해줘야한다. 왜why? 그것은 자바변수에서 - 을 못쓰기 때문이다.
      // ob["name"] 또는 ob.name 은 둘 다 가느
      // ob["uset-name"]는 가능 근데 ob.uset-name 은 불가능하다.
    
      console.log( query["name"]);
      console.log( query["age"]);
      res.statusCode =200;
      res.setHeader( "Content-Type","text/html" );
      res.end(` <h1>${ query.name} ${ query.age}</h1>` );
  }else if(pathName=="/add"){ //Spring -> DispathServlet 라는 클래스
    // http://127.0.0.1:4000/add?x=4&y=5
    // 위에 처럼보내면 아래 코드가 실행된다.
      let x = parseInt(query.x);
      let y = parseInt(query.y);
      res.writeHeader(200, {"Content-Type":"text/html" });
      res.end(`<h1>${x} + ${y} = ${x+y}</h1>` );
  }else if(pathName=="/gugu"){ 
    // http://127.0.0.1:4000/gugu?dan=4
    // 위에 처럼보내면 아래 코드가 실행된다.
    gugudan(req,res);
    }
  
  else{
    res.setHeader("Content-Type","text/html");
    res.end("<h1>POST</h1>");
  }
 
}});

server.listen(port,host,()=>{
  console.log(`Server start at http://${host}:${port}`)
})

function gugudan(req,res){
  let query =url.parse( req.url, true).query;
  let dan = parseInt(query.dan);
  let result = ''
  for(i=1; i<=9; i++){
    result += `${dan}X${i}= ${dan*i} </br>`
  }
  res.writeHeader(200, {"Content-Type":"text/html" });
  res.end(result);
}
/*
유틸설치(라이브러리설치)할 때.
node : npm yarn
python : pip

라이브러리를 설치할때 시스템을 건드리는 라이브러리가 간혹 있다.
이럴때는 관리자 권한이 있어야 제대로 설치가 된다.

모듈을 잘 못찾겠다. 혹은 모듈을 설치했는데 안돌아간다? 그럼 관리자권한으로 다시 설치
cmd -> 마우스우클릭 -> 관리자권한
VSC의 터미널 창에서도 VSC를 킬때 관리자 권한으로 키면 터미널 창도 관리자권한이 되어 설차가능하다.
*/