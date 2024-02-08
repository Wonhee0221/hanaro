// requset로 다시 만들기
const { response } = require("express");
const http = require("http");
const host = "127.0.0.1"
const port = 4000;
const url = require("url"); 
let callFunc =[
  {path:"/", func: callProcess, method : "POST"},
  {path:"/add", func: callAdd, method : "POST"}
]

let server = http.createServer((req,res)=>{
  let pathName = url.parse(req.url).pathname; //pathname 은 헤더로받는 거기 때문에 GET,POST 둘다 동일
  if (req.method == "POST" ){
   index = callFunc.findIndex(item => item.path == pathName)
  
  if (index == -1)
  {
    res.writeHeader(403, {"Content-Type":"text/html" });
    res.end("<h1>권한이 없습니다.</h1>");
    return;
  }
  callFunc[index].func(req,res)
}
});

server.listen(port,host,()=>{
  console.log(`Server start at http://${host}:${port}`)
})

function callProcess(req,res){
  let body = "";
  req.on('data',(data)=>{
    body+=data;
  })
  req.on('end',()=>{
    var data = new URLSearchParams(body.toString());
    console.log("name" + data.get("name"))
    console.log("age" + data.get("age"))

    res.writeHeader(200, {"Content-Type":"text/html" });
    var result = `<h1> 이름 : ${data.get("name")}</h1>` 
    result += `<h1> 나이 : ${data.get("age")}</h1>` 
    res.end(result);
  });
}
function callAdd(req,res){
  let body = "";
  req.on('data',(data)=>{
    body+=data;
    console.log(body) //x=1&y=12
  })
  req.on('end',()=>{
    var data = new URLSearchParams(body.toString());
    console.log("x" + data.get("x"))
    console.log("y" + data.get("y"))
    let x = parseInt(data.get("x"));
    let y = parseInt(data.get("y"));

    res.writeHeader(200, {"Content-Type":"text/html" });
    res.end( `<h1>${ x} + ${y} = ${x+y}</h1>` );
  });
}