// test함수 => 정규식함수, 정규식 객체에 있는 함수이다.
// 패턴 존재 유무만 판단한다.
let s1 = "I like star"
let s2 = "Like you"
let s3 = "I don't like"

let regexp = new RegExp(/like/) // 첫 번째 객체 생성.
console.log(s1, regexp.test(s1)) // True
console.log(s2, regexp.test(s2)) // 대소문자 섞임.
console.log(s3, regexp.test(s3)) // True

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
console.log("/like/i", "대소문자 관계없이 찾는 정규식 (i)") // 대소문자 상관없음
regexp = new RegExp(/like/i) // 첫 번째 객체 생성.
console.log(s1, regexp.test(s1)) // True
console.log(s2, regexp.test(s2)) // 대소문자 섞임.
console.log(s3, regexp.test(s3)) // True

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")

console.log("/^like/i", "대소문자 관계없고 like로 시작하는 것을 찾는 정규식(^) (i)") // 대소문자 상관없음
regexp = new RegExp(/^like/i) // 첫 번째 객체 생성.
console.log(s1, regexp.test(s1)) // True
console.log(s2, regexp.test(s2)) // 대소문자 섞임.
console.log(s3, regexp.test(s3)) // True

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")

console.log("/like$/i", "대소문자 관계없고 like로 끝나는 것을 찾는 정규식($)(i)") // 대소문자 상관없음
regexp = new RegExp(/like$/i) // 첫 번째 객체 생성.
console.log(s1, regexp.test(s1)) // True
console.log(s2, regexp.test(s2)) // 대소문자 섞임.
console.log(s3, regexp.test(s3)) // True

//exec 함수 => test와 다른게 패턴에 해당하는 정보를 배열 형태로 전달해준다.!!

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")

console.log("exec 정규식") // 대소문자 상관없음
regexp = new RegExp(/like$/i) // 첫 번째 객체 생성.
console.log(s1, regexp.exec(s1)) // True
console.log(s2, regexp.exec(s2)) // 대소문자 섞임.
console.log(s3, regexp.exec(s3)) // True


/*
  exec 함수는 해당 패턴에 일치자가 없으면 null을 반환하고 있으면
  일치자 단어, 인덱스, 입력문장, groups가 있다.
  groups => 010,019,016.. -> 이렇게 그룹별로 카운팅하고 싶을 때가 있음. 그럴때 정보를 가지고 그룹화 할 수 이
  있다.(/d{3} = > 정수 3자리 ) 
  (/d{3} - /d{4} - /d{4} => 000-0000-0000 이런 서식을 만족하는 패턴을 찾아라.)
  ((/d{3}) - (/d{4}) - (/d{4}) => ()을 통해 그룹으로 묶어준다.)
   
*/

s = `
I like star
red star
blue star
I like star
I like cat
I like dog
My Dog is pretty
I love my dog
`
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
console.log(/like/i.test(s)) // 존재유무만 판단한다.
console.log(/like/i.exec(s)) //첫번째 것만 찾고 나옴.
// i랑 g 옵션  -- 문서전체에서 대소문자 상관없이(i) , 다 찾아봐라(g)
// 옵션을 아무리 넣어도 exec는 단 한개만 찾는다.
console.log(/like/ig.exec(s));

// 여러번 등장할 경우에 : match 함수를 사용한다.
// 문자열.match(정규식)
//match 함수는 문자열에 있는 함수이다. 정규식에 속한 함수가 아님. 매개변수로 정규식을 받아간다.
console.log("match 함수ㅡㅡㅡㅡㅡㅡㅡ문자열.match(정규식)")
result = s.match(/like/ig) // g옵션을 빼면 하나만 나옴. 
console.log( result ) // 배열로 알려준다. 몇번 등장했는지는 알 수 있다.
 

// 그룹 나눠보기

s1 = "홍길동의 전화번호는 010-4142-1321 입니다. 우편번호는 : 123-442"; //전화번호만 추출하기.
regexp = /\d{3}-\d{4}-\d{4}/ // \d = 정수 , {3} = 자릿수의 의임.
console.log(regexp.exec(s1)) // 찾아낸 정보를 배열로 반환한다.

// 그룹화하기
console.log("ㅡㅡㅡㅡㅡㅡㅡ()로 묶어준다. 그룹화ㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
regexp = /(\d{3})-(\d{4})-(\d{4})/ // \d = 정수 , {3} = 자릿수의 의임.
console.log(regexp.exec(s1)) // 찾아낸 정보를 배열로 반환한다.
result = regexp.exec(s1)
console.log( result[0],result[1],result[2],result[3])

// 네이밍 그룹화하기
console.log("ㅡㅡㅡㅡㅡㅡㅡ네이밍그룹화ㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
// (?<그룹명>정규식) 이렇게 쓰면 됨. 
regexp = /(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/  // 꼭 d나 s 이런정규식 쓸때 \d 처럼 역슬래시 붙는다는 거생각.
console.log(regexp.exec(s1)) // 찾아낸 정보를 배열로 반환한다.
result = regexp.exec(s1)
console.log( result.groups["ph1"],result.groups["ph2"],result.groups["ph3"])

/*
 문장에서 전화번호 찾기
*/
console.log("ㅡㅡㅡㅡ전화번호만 추출하기ㅡㅡㅡㅡ")
s1 = `
홍길동 010-4142-1321
임꺽정 010-3121-1511
장길산 010-5345-3233
강감찬 010-1426-6547
`;
result = s1.match(/(\d{3})-(\d{4})-(\d{4})/g) // g옵션을 빼면 하나만 나옴. 
console.log( result ) 
// search = 문자열 함수 , 찾아서 인덱스를 반환한다.
// 첫번째 것만 찾는다. 없으면 -1 반환
// 정수를 반환하는 함수를 만들때. 0번부터가 배열의 인덱스로 존재
// 반환값이 객체이어양 하는경우는 참조를 반환해야하는데 -1을 못가진다.
// 그래서 참조의 경우 0 또는 null반환한다. 참조 - null, 참조가 아닌경우 - -1
// 자바스크립트의 경우 반환값이 없는 경우도 존재하기 때문에 그때는 undefined가 반환된다.
console.log("search 함수")
result = s1.search(/(\d{3})-(\d{4})-(\d{4})/g) 
console.log( result ) 


s = `
I like star
red star
blue star
I like star
I like cat
I like dog
My Dog is pretty
I love my dog
`
// replace 함수  => 패턴을 패턴으로 바꿔치기가 가능하다.
// 문자열에서 함수를 가지고 있음. match 같은것. 
console.log("replace 함수")
console.log(s)
// 문자열 like를 love로 바꾸기
// 요즘은 바뀐 문자열을 반환한다. 자바스크립트의 string은 원래 문자열을 변경불가, read only, 문자열을 받아서 해야함.
// 문자열 찾아서 바꾸기, replace는 한단어 ,replaceAll은 전부 바꾸기.
console.log("ㅡㅡㅡㅡㅡㅡreplaceㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
result1= s.replace("like","love")  //한글자만 바꾼다.
console.log(result1)
console.log("ㅡㅡㅡㅡㅡㅡㅡreplaceAllㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
result1= s.replaceAll("like","love")  //전부바꾼다. (대소문자 구문함.)
console.log(result1)
console.log("패턴으로 찾아서 단어으로 바꿔치기.")
result1= s.replace(/like/ig,"love") //대소문자 무시하고 전부 바꾸겠다.
console.log(result1)

 //replace 에 콜백함수 가 있다.
console.log("replace 에 콜백함수 가 있다.")
  // 데이터를 찾을 때 마다 callback함수가 호출되면서
  // 첫번째 매개변수 : 패턴, 두번째 : 위치(인덱스), 세번째 :문장이다.
result1= s.replace(/like/ig,function(a,b,c){
  console.log("a",a)
  console.log("b",b)
  console.log("c",c)
}) 

console.log("ㅡㅡㅡ콜백연습 2 ㅡㅡㅡ")
// callback 함수는 호출자가 시스템이다. 그래서
// 반환값이 있어야한다.
result1= s.replace(/like/ig,function(item, index){
  console.log(item,index);
  return item.toUpperCase();

}) 
console.log(result1)


console.log("ㅡㅡㅡRegExp 객체 사용 ㅡㅡㅡ")
regexp = new RegExp(/\d{3}-\d{4}-\d{4}/g);
result2 = s1.replace(regexp,function(item,index){
  console.log(item,index);
  return item
}) 
console.log(result2)

regexp = new RegExp(/(\d{3})-(\d{4})-(\d{4})/g);
result2 = s1.replace(regexp,`$1$2$3`) //하이픈(-) 없얘고 묶어서 보내기
console.log(result2)

