const n = 123;
console.log( typeof n) //typeof는  연산자 이다. 괄호여부 상관없음. 있어도되고 없어도되고

const bi = 12300000000000000n //접미어 숫자n
console.log( typeof bi)

// number
// bigint

const s = 'abc'; // string : primitive (값)
const ss = new String('abc') // Object
console.log( typeof s)
console.log( typeof ss)

const s2 = 'abc';
const ss2 = new String('abc')

console.log(s==s2); //true
console.log(ss==ss2); //false 
// - object == object 일때는 서로 같은 메모리 공간을 공유하는지 물어보는 것이다. 그래서 false가 나온다.
console.log(s==ss); //이럴 땐 내용을 봄. 왜냐면 자바스크립트에서는 형변환을 하기때문에 내용만 비교한다.

console.log(s==ss);
let c = n+Number(bi); //number와 bigint 더하기가 안됌.  여기선 형변환을 안해줌.. 
console.log( c, typeof c);


// javaScript에서의 비교는 웬만하면 ===나 !== 으로 하는 게좋음. 이건 형변환안해줌. 
console.log("2" == 2);
console.log("" == 0);
console.log(null == 0);
console.log(null == undefined);
console.log("" == undefined);
console.log(0 == undefined);
console.log("4"+"5"); // 문자열에 더하기 연산이 있기 때문에 합쳐진다.
console.log("4"*"5"); //문자열에 곱하기 연산이 없기때문에 이건 자동으로 형변환을 해준다. 

i =100;
console.log( typeof i.toString()); //순간 객체로 변경해준다. primitive타입 =>Number 객체로 전환; 
// 숫자에 함수를 적용할 수 없는데 저순간에는 잠깐만 객체로변환해서 함수를 적용한다
// 자바에서는 Integer(i).toString() => 이런식으로 형변환을 헤주고 적용해야함.
// console.log(100.toString()); //불가. 

let user = "kim";
user.age = 23;
console.log(user)
console.log(user.age) // undefined 나온다. 들어가는 척은 하는데 출력은 안됨.
// 값타입이 참조로 전환 될 수 도있다.
// 이때 수단이 중요한대. 자바는 명확히 지정을 해줘야한다. 자바스크립트는 가끔 알아서 해주기도함.
// 언제나 참조로 생각하면 코딩은 훨씬 편해짐. 신경쓸게 없어지니까.

/*
스코프 : 변수가 자신의 영향력을 미치는 범위이다.

전역변수 : 함수의 외부에 선언되는 변수, 모든 함수가 이 변수를 사용할 수 있다.
          문제는 전역변수를 많이 사용하면,
          각 함수간의 결합력을 강화하여 (즉, 의존성을 증대..나쁜것.)
          한 함수에서의 변화가 다른 함수에 연쇄반응을 일으켜서
          프로그램 유지 보수에 좋지않다.
          가급적 아주 제한적으로 사용하는 게 좋다.

지역변수 : 함수의 내부에 선언되는 변수,
          그 함수를 호출할 때 비로소 메모리가 할당되며 함수의 종료즉시
          메모리로부터 제거된다. 영향력이 함수 내에서만 존재.
          가급적 많이 쓰는걸 권장한다.
객체 지향이 나오면서 변수의 스코프가 좀 더 세분화되어서 
if () 블락이나 for(){} 등의 블럭내에서만 존재하는 변수도 생겼다.
이 블락안에 만들어진 변수들은 그 블락 안에서만 존재하는데
자바스크립트의 var 을 이용한 선언은 이 부분이 적용되지 않는다. ???
함수단위의 스코프는 var도 적용되지만 for문이나 while 문 등에서 지역적으로 
선언된 변수에 대해서는 별도로 인식하지 않고 모두 같은 것으로 인식하는
상황을 호이스팅이라고 한다.(예시로 for(i++; ) 이렇게 쓸때 var i 로 하면 호이스팅이 생긴다)
 => 그래서 let이 나왔고, let의 경우에는 
if, for, while등의 블랙내에서만 존재하는 변수를 선언할 수 있다.
앞으로의 변수 선언은 let 키워드를 이용해 선언하도록 적극 권장하고 있다.
 
*/