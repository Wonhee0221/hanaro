
let count = 0;
function increase(){
  count++; //함수 외부의 변수를 참조한다.
  return count
}

console.log( increase() )
console.log( increase() )
count =100; // 값이 오염된다. 전역변수를 사용하고 있음
console.log( increase() )
console.log( increase() )

//함수안에 함수를 만들수 있다. 외부함수와 내부함수가 있다. 
// 외부함수의 반환값에 내부함수의 주소를 내보낸다. 
function myCounter(){
  let count = 0; //지역변수 , private접근 권한처럼 접근이 안되는 상황이다.
  function increase(){ //myCounter 함수내의 지역변수에대한 접근이 가능하다.
    count++; //함수 외부의 변수를 참조한다.
    return count //값을 반환한다.
  }
  return increase; //내부함수를 외부로 반환한다.
}

const counter1 = myCounter(); // counter1 에는 count 지역변수와 increase라는 함수가 존재
//counter1 에는 increase 주소, 함수를 실행하면 return increase를 만난다.
// 그래서 increase 함수 참조가 counter1 이 된다.
console.log("counter1 :" ,counter1() )
console.log("counter1 :" , counter1() )
count =100;  // 여기서는 값을 바꿔도 접근이 안된다, 정상.
console.log("counter1 :" , counter1() )


const counter2= myCounter(); 
console.log("counter2 :" ,counter2() )
console.log("counter2 :" , counter2() )
console.log("counter2 :" , counter2() )

// 클래스가 없을때에는 이렇게 코딩을 했다!~!~


function myCounter2(){
  let count = 0; 
  function changeBy(value){
    count+=value;
    return count;
  }
  // 모든 함수는 반환값이 하나여야한다.
  //JSON을 사용하면 JSON객체 자체는 하나이므로 함수문법상 아무 문제없다.
  return {
    increase : function(){ 
      changeBy(+1)
  },
  decrease :function(){ 
      changeBy(-1)
  },
  value :function(){ 
     return count;
  },
}}

const mycounter1= myCounter2(); 
mycounter1.increase()
console.log("mycounter1 :" , mycounter1.value() )
mycounter1.decrease()
console.log("mycounter1 :" , mycounter1.value() )

//Reflect : 객체에 대한 정보를 알려주는 클래스다.
let user ={"name":'홍길동', "age":23};
console.log(Reflect.ownKeys(user)); 