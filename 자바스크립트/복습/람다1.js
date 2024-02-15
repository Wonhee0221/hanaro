// 함수와 함수표현식 람다.

// parseInt 함수만들기
// 문자열은 ascii 코드(표준, 7bit, 1bit-패리티비트(에러체크용비트))
              // unicode 코드 , 문자저장시 2byte를 사용한다.
              // unicode 코드 ,영어, 자국언어 -통신을 할땨눈 1byte씩
              // utf-8 : 3byte 문자시스템 = 전세계언어 다 표현가능


let s = "123823423"
console.log(s.charCodeAt(0)-'0'.charCodeAt())
console.log(s.charCodeAt(1)-'0'.charCodeAt())
console.log(s.charCodeAt(2)-'0'.charCodeAt())


function myCount(s){
  let count = [];
  let i;
  for(i=0;i<26;i++)
    count.push(0)
  for(i=0;i<s.length;i++){
    if(isLower(s[i])){
      count[getIndex(s[i],true)]++
    }
    if(isUpper(s[i])){
      count[getIndex(s[i],false)]++
    }
  }
  count.forEach((cnt,i)=>{
    console.log(String.fromCharCode(65+i),cnt)
  })
}
function isLower(s){
  if ( s.charCodeAt(0)>=65 && s.charCodeAt(0)<91){
    return true
  }
  return false
}
function isUpper(s){
  if (s.charCodeAt(0)>=97 && s.charCodeAt(0)<123){
    return true
  }
  return false
}
function getIndex(s,flag){
  if (flag)
    return s.charCodeAt(0)-65;
  else
    return s.charCodeAt(0)-97;
}
myCount("asf sn hNJNJ")