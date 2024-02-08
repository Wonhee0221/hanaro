
let a:number;
let b:number;
let c; //번역하는 순ㅅ간 에러 발생(ts -> js), transfer 변환
a =10
b = 20
c = a+b

console.log(`${a}+${b}=${c}`)

// 변환 tsc 파일명.ts           확장자 생략가능
// 실제 실행 node 파일명.js     확장자 생략가능