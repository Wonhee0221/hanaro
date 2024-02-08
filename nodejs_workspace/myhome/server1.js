import http from 'http'
import fs from 'fs'
import ejs from 'ejs';// npm install ejs
import url from 'url'
import path from 'path';
 //ejs => html 문서와 json 객체를 합쳐서 새로운 html을 만든다.
// 렌더링한다고 표현
//함수 맵을 만들자
// 일일히 if문 사용말고 for문을 써서 해당 url오면 함수를 호출하자.
const pathMap=[
  {'path':"/",     "func":index},
  {"path":"/test", "func":test},
  {"path":"/add", "func":add}, //입력창으로 이동
  {"path":"/add_result", "func":add_result} // 입력처리 , 디비에 넣고
];
let server = http.createServer((requset, response)=>{
  let pathName = url.parse(requset.url, true).pathname;
  if (requset.method == "GET"){
    let idx= pathMap.findIndex((item)=>  item.path == pathName);
    if (idx != -1){
      pathMap[idx].func(requset,response);
    }

  }
  else if(requset.method == "POST") {}
  else {
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); //"text/html;charset=utf-8" 한글을 가능케함.
    response.end("<h1>한글도 가능</h1>")
  }
  
});
server.listen(3000,'127.0.0.1', ()=>{
  console.log("http://127.0.0.1:3000 start");
  // listen이 완료되면 호출된다.
})

// nodemon - node모니터링 -> 소스바뀌면 자동으로 재시작
// 주의사항 : 우분투에서는 이게 동작잘안함.
// putty을 통해 우분투에 접속하는데 이걸 끄면 nodemon도 같이꺼짐.
// p2라는 프로그램 또는 ngnix 엔진에 올리기도하는데
// p2를 설치하고 가동시키자 - p2: 우분투에서 node를 데몬으로 실행시키게 한다.

// 노드몬 설치 : npm install -g nodemon
// 노드몬 실행 : nodemon server1

function index(requset,response){
  // 1. html 파일 열것.
  fs.readFile(path.resolve()+'/html/index.html',"utf8",(error,data)=>{
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    let result = ejs.render(data); // 현재는 아무값도 전달하지 않아서 render를 거차나 안거치나 같다.
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); //"text/html;charset=utf-8" 한글을 가능케함.
    response.end(result)
  })
}
function test(requset,response){
  //get 방식 파싱 ==> index.html에 name=Tom 썻던게 여기에 있다.
  let params = url.parse(requset.url,true).query;
  console.log(params); //
  fs.readFile(path.resolve()+'/html/test.html',"utf8",( error , data )=>{ //비동기 함수.
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    // ejs.render(파일내용(string), {}:보낼데이터)
    // {name:"Tom"} => html 문서에서는 <%=name%>
    let result = ejs.render(data,params); // 현재는 아무값도 전달하지 않아서 render를 거차나 안거치나 같다.
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); //"text/html;charset=utf-8" 한글을 가능케함.
    response.end(result)
  })
}
function add(requset,response){
  // 1. html 파일 열것.
  fs.readFile(path.resolve()+'/html/add.html',"utf8",(error,data)=>{
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    let result = ejs.render(data); // 현재는 아무값도 전달하지 않아서 render를 거차나 안거치나 같다.
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); //"text/html;charset=utf-8" 한글을 가능케함.
    response.end(result)
  })
}
function add_result(requset,response){
  //get 방식 파싱 ==> form태그를 타고 input태그의 name 속성이
  // /add_result?x=5&y=7 
  let params = url.parse(requset.url,true).query;
  console.log(params); //
  fs.readFile(path.resolve()+'/html/add_result.html',"utf8",( error , data )=>{ 
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    //params :{x:5,y:7, result:12} =>> 이런형식으로 만들고 싶을때에는{...params} 해주면된다. 
    let result = ejs.render(data,{...params, "result":parseInt(params.x) + parseInt(params.y)}); 
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); 
    response.end(result)
  })
}