var msg = "Hello"; // Hello 글자가 저장된 곳에 주소가 저장된다.
var profile = { name: "홍길동", age: 29 };
// msg = "안녕하세요"; //msg 는 const로 선언 되어서 내용을 변경할 수 없다.
// Hello라는 문자열이 저장된 주소를 msg 변수가 받는다.
// 안녕하세요는 다른 동네에 저장된다. 그래서 msg의 내용변깅이 불가
// profile = {name:"임꺽정",age:239}; // 위의 객체와 다른객체 할당 불가능
profile.name = "장길산"; // profile이 소유하고 있는 객체의 name과 age는 상수가 아님.
// 그래서 name이 갖는 값과 age가 갖는 값은 변경가능
// profile은 계속 동일한 객체 주소를 갖고 있다.
console.log(profile);
