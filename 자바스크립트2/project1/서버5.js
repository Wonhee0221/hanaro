const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const url = require("url");
const fs = require("fs"); 
const ejs = require("ejs");
const functionMap = [
  {path:"/add_input",func:add_input},
  {path:"/add_output",func:add_output}
];

// input과 output 으로 나눠서 화면띄우기
let server = http.createServer((req, res)=>{
  if (req.method=="GET"){
    let pathName = url.parse(req.url,true).pathname;
    let idx = functionMap.findIndex(item => item.path == pathName);
    if (idx==-1){
      res.writeHead(200,{"Content-Text":"text/html"});
      res.end("<h1>없는페이지입니다</h1>");
      return;
    }
    functionMap[idx].func(req,res)
  }
  
} );
server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});
function add_input(req,res){
  

  fs.readFile("./html/add_input.html", "utf-8", function(error, data){
    if(error)
    {
        console.log( error );
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Error</h1>");
        return;
    }
    res.writeHead(200, {"Content-Type":"text/html"});
    data = ejs.render(data,)
    res.end( data );
});
}
function add_output(req, res)
{
    let params = url.parse(req.url,true).query;
    fs.readFile(__dirname+"./html/add_output.html", "utf-8", function(error, data){
        if(error)
        {
            console.log( error );
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Error</h1>");
            return;
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        //data = data.replace("{{title}}", "Hello");
        //ejs엔진이 동적인 웹페이지를 만든다.
        data = ejs.render(data, {"x":parseInt( params.x),"y": parseInt(params.y)} )
        res.end( data );
    });
}