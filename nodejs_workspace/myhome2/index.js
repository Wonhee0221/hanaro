import http from 'http';
import fs from 'fs';
import ejs from 'ejs'; //npm install ejs
import url from 'url';
import path from 'path';

//path : 가상 url http://localhost:3000/같은거
//func : url 요청이 왔을 때 처리를 담당할 함수 주소
//filename : 요청에 대해서 응답할 html파일, 전체 경로는 상수나 다른 값으로 가공해서 보낸다.
const hostname = "127.0.0.1" //도메인으로 바뀐다.
const port = 3000;
const hosturl = `${hostname}:${port}`
const pathMap=[
    {"path":"/","func":index,"filename":"index"},
    {"path":"/member","func":member,"filename":"member/member_join"},
    {"path":"/member/join","func":member_join,"filename":""},
    {"path":"/member/list","func":member_list,"filename":"/member/member_list"},
];
//ejs => html 문서와 json객체를 합쳐서 새로운 html을 만든다
//       렌더링
//createServer 클라이언트가 접속요청을 하면 자신한테 전달된 callback함수 호출
let server = http.createServer((request, response)=>{
    let pathName = url.parse(request.url, true).pathname;
    if(request.method=="GET")
    {
        let idx = pathMap.findIndex((item)=> item.path == pathName);
        if( idx !=-1)
        {
            request["filename"] = pathMap[idx].filename;
            pathMap[idx].func(request, response);
        }
    }
    else if(request.method=="POST" )
    {
      let idx = pathMap.findIndex((item)=> item.path == pathName);
        if( idx !=-1)
        {
            request["filename"] = pathMap[idx].filename;
            pathMap[idx].func(request, response);
        }
    }
    else
    {
       response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
       response.end("<h1>한글도가능</h1>");
    }
});
server.listen(3000, "127.0.0.1", ()=>{
    console.log("http://127.0.0.1:3000 start");
    //listen 이 완료되면 호출된다.
})
//해당 파일을 폴더로부터 읽어서 전달해주는 함수가 필요하다.
async function readFile(filename){
  //파일의 크기가 작을 경우에는 동기로 읽어도 된다. 비동기로 읽은 경우에
  //이 함수에서 바로 return이 안된다. 그럴경우에 async나 await를 사용해야한다.
  // 여기서 readFile함수는 비동기다
  let file = path.resolve()+"/html/"+filename+".html"
  let filedata =''
  // promise 객체는 then구문 => 동기
  filedata =await fs.promises.readFile(file,"utf-8")

  return filedata; //async가 붙은 함수는 Promise 객체로 반환한다.
}
//html 파일과 연동 해야한다.
async function index(request,response){
  console.log( request["filename"] )
  let filedata = await readFile(request["filename"]); //readFile("index"); 둘이 같은역할. //반환값이 프라미스타입이다. then과 catch 구문 사용해야한다.
  // then구문을 써서 처리하던가 아니면 await를 이용해 작업이 완료할 때까지
  // 대기를 해야한다. await를 쓸 경우 주의사항은 함수에 async 가 붙어야한다.
  // 반대로 말하면 async가 붙은 함수 안에서만 await 구문이 사용가능하다.
  console.log(filedata)
  response.writeHead(200,{"Content-Type":"text/html;charest=utf-8"});
  response.end( filedata )

}
//member 서버
async function member(request,response){
  let filedata = await readFile(request["filename"]); 
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  response.end( filedata )
}

let memberData = [
  {"id":0,"username":"홍길동","userid":"test1","password":"1234",
          "phone":"010-0402-0040","email":"hong@gamil.com"},
  {"id":1,"username":"임꺽정","userid":"test2","password":"1234",
          "phone":"010-0402-0041","email":"im@gamil.com"},
  {"id":2,"username":"장길산","userid":"test3","password":"1234",
          "phone":"010-0402-0042","email":"jang@gamil.com"}
]//
function member_join(request,response){
  let body = "";
  request.on('data',(data)=>{
    body+=data
  });
  request.on('end',()=>{
    let params = new URLSearchParams(body);
    const obj = Object.fromEntries(params)// URLSearchParam객체를 JSON 형태로 변환
    console.log( obj )
    memberData.push(obj)
    console.log(memberData);
    // response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    // response.end( "등록성공" )

    //리다이렉트하기, 페이지를 index로 이동시킨다. 내부적으로 할일이 많아서
    // 직접 index 함수를 호출하면 안된다.
    response.writeHead(301,{ //페이지 이동 => url이 바뀌어야한다. 그때 301을 쓴다.
      "Location":"http://localhost:3000/"
    })
    response.end()
    //index 페이지로 이동을 시켜야한다.  --- request에 있던 정보가 사라져야한다.
  })
}

/*
 등록과정을 거치고 나면 페이지를 리다이렉트 시켜줘야한다.
 등록을 하고 나서 F5(새로고침)을 하면 request에 있는 내용이 지워져야한다. 즉 다시나오면 안된다. 정보가 자꾸 추가됨.,

 */

async function member_list(request,response){
  let fileData = await readFile(request["filename"]); //readFile 함수자체가 비동기이기 때문에 이것도 비동기처리를 해줘야한다.
  response.writeHead(200,{"Content-Type":"text/html;charest=utf-8"});
  let result = ejs.render(fileData, {"member_list":memberData});
  response.end( result )
}