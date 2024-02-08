let x , y;

x =7;
y = ++x; //전치연산자 ++연산자의 우선순위가 젤 높아진다.
          // ++x 먼저 수행하고 = 을 수행한다.
console.log(`x = ${x} y= ${y}`)

x =7;
y = x++; //후치연산자 ++연산자의 우선순위가 가장 낮아진다.
        //  y=x가 먼저 실행되고 x++이 실행된다. 가급적 단독으로 쓰자(다른연산자랑 섞어 쓰지말자.)
console.log(`x = ${x} y= ${y}`)

// EX 
// let i = 1;
// while (i<=10){
//   console.log(i);
//   i++ // 가급적 이런식으로 단독으로 써주는게 좋다.
// }

console.log("------------------------")
// 일반 함수로 만들면, 함수가 뒤에 있어도 호출이 가능하다. 
//근데 화살표함수나 함수표현식funtion(x,y) 이런거는 
//변수에 함수의 주소만 저장이라 변수가 호출하기전에 미리존재해야한다. 
let output = (x , y )=>{
  console.log(`x = ${x} y= ${y}`)
}
let p,q;
x=y=5 // 변수 여러개를 동시에 초기화가 가능하다.
let z;
output(x,y);

q = (p=x=1, y=2,z=3)
/*
 연산순서
 x =1
 p =1 
 y=2
 z=3
 q=z=3
 */
console.log(`x = ${x} y= ${y}  z= ${z}  p= ${p} q= ${q}`)
// 거듭제곱
console.log(2**3,Math.pow(2,3))
// Math - 클래스 : 클래스 자체로 사용을 못한다. 객체를 만들어야 사용이 가능하다.
// 클래스는 반드시 객체를 만들어야하는가?
// 클래스는 관련있는 데이터와 함수의 결합이다. 
          // 1. 데이터와 함수가 결합이된다.
          // 2. 데이터만 있는 클래스도 가능하다(변수만)
          // 3. 함수만 존재하는 클래스도 가능하다.
          // (객체안만들거나 하나만 만들어서 씀)
          // 대표적으로 Math - 거듭제곱, 반올림, 코사인, 사인, 탄젠트,,,,제곱 등
          // 함수나 변수에 static 키워드가 붙으면 전역공간으로 들어감. 다른말로 static공간.

let arr; // d아무것도 할당하지 않으면 undefined
console.log(arr)
// console.log(arr.length) //Cannot read properties of undefined (reading 'length') / 할당이 안되어있을 때 나오는 에러
arr = [1,2,3]
console.log(arr, typeof arr)
console.log(arr.length) //Array 객체가 할당되면서 그에 필요한 메서드나 변수를 사용할 수 있게된다.

let arr2;
console.log(arr2?.length); // 예외가 발생하지 않고 undefined가 출력된다. 서버가 안 다운됨!!! 아주 중요
/*
 ? => 자바의 Optinal에 해당된다.
 ? 이 객체가 제대로된 객체값을 가질수도 있고 undefined 일수도 있다.
 브라우저라면 예외가 발생해도 DOM구조 출력하는데 아무런 문제가 없다.
 그냥 스크립트만 안돌아가고 끝임 => 치명적이지 않다.
 근데 nodejs는 서버사이드 스크립트 플랫폼이기때문에 예외가 발생하면 서버가 죽어버린다.(아무것도 안됌.)
      웹서버가 예외에 의해서 완전 다운되는 상황.
 객체참조변수? - 이 객체 참조변수에는 객체가 있을 수도 있고 없을 수도 있다.
 Optional<Test>;
 */

 //예외처리
let arr4 ;
if (arr4 == undefined){
  arr4 = []
  console.log("error")
}
console.log(arr4?.length)
// 요즘 예외처리
let arr5;
arr5 = arr5??[]; // ??- undefined라면 []을 만들어 전달해라
console.log(arr5?.length)

//true =1 , false=0
console.log(1+true,1+false);
//0이 아닌 모든 값을 True로 알아듣는다.
if (-1){
  console.log("*******************")
}

x =3;
y =5;
max = x>y?x:y;
console.log(max)


a = 1
b = 2
c = (a++ , b++); //() 먼저 실행후 = 실행 즉, c(a,b) 수행후 a++이랑 b++이 차례대로 수행된다.
console.log(a,b,c)

d = (a--, b+c);
console.log(a,b,c,d)

// <a href="javascript.goAdd()">클릭</a>
// <a href="javascript.void(0)">클릭</a> //클릭했을 때 위치 그대로 (클릭위치에 그대로 있게함)1
// <a href="#none">클릭</a> //클릭했을 때 위치 그대로 (클릭위치에 그대로 있게함) 2