//해체 :

let userinfo = {"username":"홍길동", "age":23 , "job" : "프로그래머"};

// let {username,age,job} = userinfo;
// console.log(username)
// console.log(age)
// console.log(job)

// // 아래에는 다 undefined가 뜸. 왜냐면 할당받을 변수 명이 같지 않아서 인식을 못함.
// let {username2,age2,job2} = userinfo;
// console.log(username2)
// console.log(age2)
// console.log(job2)

const {username, ...userInfo2} = userinfo;
console.log(username,userInfo2)