// requset로 다시 만들기
const http = require("http");
const host = "127.0.0.1"
const port = 4000;
const fs = require( "fs" );
const url = require("url"); // GET방식으로 전달된 문자열을 parsing을 해서 json으로 만들어준다.
const path = require("path");
const { query } = require("express");

let server = http.createServer((req,res)=>{
  console.log(req.method)
  console.log( req.url ) //url 보는 코드 / /?name=Tom&age=12
  console.log( url.parse( req.url) ) 
  /*
  우리는 url 에서 정보를 얻으려한다.
  name과 age를 그걸 파스로 꺼낸다.
  */
  let pathName = url.parse( req.url).pathname; 
  if (req.method == "GET" && pathName=="/")
  {
      //GET 방식일땐 이렇게
      let query =url.parse( req.url, true).query; //String //true로 하게되면 문자열을 json형태로 변환
      console.log( query["name"]);
      console.log( query["age"]);
      res.statusCode =200;
      res.setHeader( "Content-Type","text/html" );
      res.end(` <h1>${ query.name} ${ query.age}</h1>` );
  }else{
    res.setHeader("Content-Type","text/html");
    res.end("<h1>POST</h1>");
  }
 
});

server.listen(port,host,()=>{
  console.log(`Server start at http://${host}:${port}`)
})