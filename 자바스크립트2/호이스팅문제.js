var g_a; //전역변수의 경우 g_ 를 사용해서 전역변수임을 티내야한다.

function myfunc1(){
  var g_a //함수에만 영향을 미친다, 아무리 var선언자라도 함수의 호이스팅을 지켜준다.
  g_a = 10;
  console.log("myfunc1",g_a)
  //전역변수공간에 g_a 따로있고 지역변수 공간에 g_a 가 따로 있다. 
  // var도 함수 scope는 지키더라.
}
console.log("전역",g_a)

function myfunc2(){
  var g_a //함수에만 영향을 미친다, 아무리 var선언자라도 함수의 호이스팅을 지켜준다.
  let g_b // let명령어는 Block 레벨 스코프다.
  {
    var g_a = 10; // 이 메모리와 블랙밖에 g_는 동일한 메모리다. 이게 문제가 되어서 let을 만들었다. 순수 블락안에서만 작동하도록.
    let g_b = 1000;
    console.log("myfunc2 g_a",g_a)
    console.log("myfunc2 g_b",g_b)
    //전역변수공간에 g_a 따로있고 지역변수 공간에 g_a 가 따로 있다. 
    // var도 함수 scope는 지키더라.

  }
  console.log("블럭밖에서")
  console.log("myfunc2 g_a",g_a)
  console.log("myfunc2 g_b",g_b)

}
myfunc2()