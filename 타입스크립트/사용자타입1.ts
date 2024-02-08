// 사용자타입1.ts
type PersonInfo = {
  id:number;
  name:string;
  age:number;
  address:string;
};
let person1:PersonInfo; // 빨간줄 나왔다고 무조건 에러가 아님.
person1 = {id:1, name:"홍길동", age:12,address:"서울시"};
console.log(person1)
