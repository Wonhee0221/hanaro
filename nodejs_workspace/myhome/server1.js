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
  {"path":"/add_result", "func":add_result}, // 입력처리 , 디비에 넣고
  {"path":"/weekPay", "func":weekPay}, //입력창으로 이동
  {"path":"/weekpay_result", "func":weekpay_result},
  {"path":"/weekpay_proc", "func":weekpay_proc}, // => AJAX처리
  // 결과를 html이 아닌 JSON으로 보낸다. RestFul API를 만든다.
  // 회원가입 페이지 : id 중복체크, 회원가입페이지이동, 회원가입 최소한 3개의 url필요
  //id 중복체크 - json 응답. 
  {"path":"/idCheck", "func":idCheck}, // userid를 json형태로 받아서 true 또는 false를 반환
  // 회원가입페이지이동
  {"path":"/member", "func":member}, // 사용자에게 입력을 받는 단순 페이지들은 프론트엔드로 빠져나감.
  //회원가입 - 데이터를 받아가서 일을 하는 페이지/ 아예페이지 전체바꾸기 ajax 둘다
  {"path":"/regist", "func":regist} //axios를 써서 -> 결과가 json
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
    let result_oper;
    if( params.operator == 1){
      result_oper = parseInt(params.x) + parseInt(params.y)
    }
    else if( params.operator == 2){
      result_oper = parseInt(params.x) - parseInt(params.y)
    }
    else if( params.operator == 3){
      result_oper = parseInt(params.x) * parseInt(params.y)
    }
    else if( params.operator == 4){
      result_oper = parseInt(params.x) / parseInt(params.y)
    }
    let result = ejs.render(data,{...params, "result":result_oper}); 
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); 
    response.end(result)
  })
}
/*
  주급계산
weekpay.html 에서 name ,work_name, per_pay

weekpay_result.html
*/
function weekPay(requset,response){
  // 1. html 파일 열것.
  fs.readFile(path.resolve()+'/html/weekPay.html',"utf8",(error,data)=>{
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    let result = ejs.render(data); // 현재는 아무값도 전달하지 않아서 render를 거차나 안거치나 같다.
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); //"text/html;charset=utf-8" 한글을 가능케함.
    response.end(result)
  })
}
function weekpay_result(requset,response){
  //get 방식 파싱 ==> form태그를 타고 input태그의 name 속성이
  // /add_result?x=5&y=7 
  let params = url.parse(requset.url,true).query;
  console.log(params); //
  fs.readFile(path.resolve()+'/html/weekpay_result.html',"utf8",( error , data )=>{ 
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    //params :{x:5,y:7, result:12} =>> 이런형식으로 만들고 싶을때에는{...params} 해주면된다.
    let result = ejs.render(data,{...params, "result":(parseInt(params.week_time) * parseInt(params.per_pay)).toLocaleString()}); 
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); 
    response.end(result)
  })
}

// ajax로 구축 - html 파일 필요 없음
// weekpay_proc?name=tom&work_time=10&per_pay=10
function weekpay_proc(requset,response){
  let params = url.parse(requset.url,true).query; //우리가 보낸 정보가 여기 있다.
  let name = params.name;
  let work_time = params.work_time;
  let per_pay = params.per_pay;
  let weekpay =work_time *per_pay
  let result = {"name":name,
   "work_time": work_time,
   "per_pay": per_pay,
   "weekpay":weekpay}
  // Content-Type 이 application/json 이어야한다.
  response.writeHead(200,{"Content-Type":"application/json;charset=utf-8"}); 
  response.end(JSON.stringify(result)) //결과를 json 파일로 보낸다.


}

function member(requset,response){
  // 1. html 파일 열것.
  fs.readFile(path.resolve()+'/html/member.html',"utf8",(error,data)=>{
    if (error){
      console.log("파일을 찾을 수 없습니다.")
      return;
    }
    let result = ejs.render(data); // 현재는 아무값도 전달하지 않아서 render를 거차나 안거치나 같다.
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); //"text/html;charset=utf-8" 한글을 가능케함.
    response.end(result)
  })
}
let memberData = []
function idCheck(requset,response){
  let params = url.parse(requset.url,true).query; //우리가 보낸 정보가 여기 있다.
  let userid = params.userid;
  // test라는 아이디는 사용불가
  let result = {}
  let idx = memberData.findIndex((mem)=>mem.userid==userid)
  if (idx !== -1 ){ //존재한다. 존재하면 다 여기걸림.
    result = {"useyn":"N", "msg":'이미 사용중입니다'}
  }
  else
    result = {"useyn":"Y","msg":'사용가능합니다.'}
  // Content-Type 이 application/json 이어야한다.
  response.writeHead(200,{"Content-Type":"application/json;charset=utf-8"}); 
  response.end(JSON.stringify(result)) //결과를 json 파일로 보낸다.
 

}
function regist(requset,response){
  let params = url.parse(requset.url,true).query; //우리가 보낸 정보가 여기 있다.
  // let userid = params.userid;
  // let password = params.password; // 암호화 필수다.
  // let username = params.username;
  // let phone = params.phone;
  // let email = params.email;
  
  memberData.push(params) // 디비가 몽고디비라면
  console.log(memberData)
  let result = {"result":"SUCCESS","msg":'회원 가입을 축하합니다.'}
  // Content-Type 이 application/json 이어야한다.
  response.writeHead(200,{"Content-Type":"application/json;charset=utf-8"}); 
  response.end(JSON.stringify(result)) //결과를 json 파일로 보낸다.


}