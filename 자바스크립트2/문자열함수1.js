const { text } = require("stream/consumers");

let s = "red,green,blue,cyan,magenta,sky,purple";
// 문자열을 특정기호 기반으로 분리하고자 할 때 split함수
let result = s.split(",");
console.log(result)

//join : 문자배열을 받아서 문자열로 합쳐주는 함수.

console.log( result.join(""));
console.log( result.join("\t"));
console.log( result.join("\n"));
console.log( "한글","*")
console.log( "123456","*")
console.log( "한글".padStart(5),"*") //바이트수로함.

console.log("1".padStart(3,0)) // 001,002, e등과같이 사용할때


let today= "2024-02-05"
console.log(today.substring(0,4)); // start,end 위치.
console.log(today.substring(5,7));
console.log(today.substring(8,10));
// 맨 마지막은 비워둔다. substring 함수의 인덱싱 방식이 언어마다 다르다.
/// 시작,길이 또는 시작위치, 엔딩위치, 엔딩위치는 배고 엔딩위치 -1까지만출력한다.

console.log(today.slice(0,4)); 
console.log(today.slice(5,7)); 
console.log(today.slice(8,10));

//trim, 문자열 앞뒤에 쓸데 없는 공백을 제거한다.
// test
s = "        test         "
console.log(s);
console.log(s.trim());

/* 
ascii : america standard code institute
        0-9 a~z A~Z ,, 이 총 128글자 이내더라
        그래서 아스키코드라는 표준안을 만든다. 7bit, 1비트가 남음

아스키코드
패리티비트 : 짝수패리티와 홀수패리티가 있다.
              짝수패리티의 경우에는 1의 개수가 짝수가 되게한다.
              홀수패리티의 경우에는 1의 개수가 홀수가 되게한다.
해밍코드 : 검출과 동시에 수정도 가능하게 하는 알고리즘이다.
체크섬 : 주민번호나 통장번호처럼 보안을 요하는 정보를 기록할 때
          앞의 데이터들에 연산식이 존재해서 연산수행 결과가 맨 마지막 번호하고 맞아야한다. 
*/
console.log("0".charCodeAt(0)); //48
console.log("A".charCodeAt(0)); //65
console.log("a".charCodeAt(0)); //97

console.log("---------------------------------")
//s에 문자가 들어가 있으면 -1을 반환
// 숫자로 다 되어 잇으면 123을 만들어 반환하는 함수를 작성하세요
function myParseInt(s){
  result = 0
  for(i=0;i<s.length;i++)
  {
    if (s.charCodeAt(i)<48 || s.charCodeAt(i)>57)
      return -1;
    result= result * 10 + (s.charCodeAt(i)-48)
  }
 return result;
}
console.log(myParseInt("123"))
result = myParseInt("123") +myParseInt("456");
console.log(result)

console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(97)); //a

let holiday = "한글날";
let month = 10
let day = 9;

s = ` ${holiday}는 ${month}월 ${day}일 입니다.`;
console.log( s )

function ff(texts,a,b,c){
  console.log("texts ==>", texts) //첫 번째 파라미터는 전달된 문장에서 ${}를 제외한 단어들을 배열형태로 준다.
  console.log("a ==>", a) // 순서대로 ${}안에 들어간걸 하나씩 뽑아줌.
  console.log("b ==>", b) // 순서대로 ${}안에 들어간걸 하나씩 뽑아줌.
  console.log("c ==>", c) // 순서대로 ${}안에 들어간걸 하나씩 뽑아줌.
}
ss = ff`${holiday}는 ${month}월 ${day}일 입니다.` //함수 이름만.

function upperToLower(str){
  let regexp = new RegExp(/[A-Z]/g);
  //replace(패턴)
  let r = str.replaceAll(regexp, (str)=>{
    return "*"+str.toLowerCase()+"*-";
  })
  return r;
}

console.log(upperToLower("Senior Coding Learning JS"))

//전화번호를 정확한 형식으로 출력하는 함수 작성하기.
// 입력태그에 숫자넣으면 자동으로 형식 맞추는 함수 만들 때 유용하다.

let phone = "01012345678"
console.log(phone.replace(/(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3'))

function tellfmt(phone){
  // phone?.length : phone 객체 null값 가능
  // phone객체가 null 이면 phone.length 는 undefined 가 온다.
    const len = phone?.length ?? 0; //undefined 일때 0을 넣고, 아니면 phone.length; 
    if (len < 7) //에러처리
      return phone
    if (len <= 8) //7이거나 8인경우
      return `${phone.substring(0,len-4)}-${phone.substring(len-4)} `
    // 2,3,4 / 3,3,4/ 3,4,4
    unit1 = 3;
    unit2 = 4;
    unit3 = 4;
    if (phone.startsWith("02"))
    {
      unit1 = 2;
      unit2 = len==9?3:4;
    }
    unit3 = len - unit1 -unit2;
    // 리터럴이 아니고 문자열로 만들면 \d -> \뒤에 별도의 제어문자로
    // \문자가 )한글폰트에서는  돈표시 escape문자로 인식함.
    // 그래서 한번씩 더 써줘야함.
    let regexp = new RegExp(`(\\d{${unit1}})(\\d{${unit2}})(\\d{${unit3}})`);
    return phone. replace(regexp,'$1-$2-$3' )

    
}
console.log(tellfmt("12313")) //에러
console.log(tellfmt("1234567"))
console.log(tellfmt("12345678"))
console.log(tellfmt("0212345678"))
console.log(tellfmt("02123467"))