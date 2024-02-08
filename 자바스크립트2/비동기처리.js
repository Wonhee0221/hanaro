// nodejs는 html로 만드는거 아님.
//require -> 외부 모듈을 불러온다. 
//그럼 import구문과 비슷한가>? 아니다. 자바는 이미 모듈이 불러와져있음 거기서 사용한거임.
// 즉 java.lang.String 을 써야하지만 String을 쓰면 import 된 파일에서 찾아보는 것이다.
// 노드나 파이썬에서의 import는 모듈을 메모리로 가져온다.require은 메모리에 존재한다.

let fs = require("fs")
fs.readFile("멀티스레드.txt","utf8",function(error,data){
  console.log(data);
})
console.log("완료");


//비동기식의 단점이 순서가 애매함.