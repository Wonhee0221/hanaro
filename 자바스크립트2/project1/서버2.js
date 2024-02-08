// requset로 다시 만들기
const http = require("http");
const host = "127.0.0.1"
const port = 4000;
const fs = require("fs");

let server = http.createServer((req,res)=>{
  console.log(req.method)
  if (req.method =="GET")
  {
    fs.readFile("./html/input_html.html","utf-8",(err,data)=>{
      res.statusCode =200;
      res.setHeader("Content-Type","text/html");
      res.end(data);
    })
  }else{
    res.setHeader("Content-Type","text/html");
    res.end("<h1>POST</h1>");
  }
 
});

server.listen(port,host,()=>{
  console.log(`Server start at http://${host}:${port}`)
})