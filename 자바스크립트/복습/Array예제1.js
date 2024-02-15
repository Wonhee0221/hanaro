// Array예제1.js

let arr = [1,2,3,"test",{product:"텀플러",conut:3},[1,2,3,4,5]]
console.log(arr)
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")

arr.forEach((item)=>{
  console.log(typeof item)
  if(typeof item === "number"){
    console.log("숫자",item)
  }
  else if(typeof item === "string"){
    console.log("문자",item)
  }
  else if(typeof item === "object"){
    console.log("오브젝트",item)
  }
})

/*
javascript 배열은 연관 배열이 아니므로 임의의 문자열을 인덱스로 사용하여
배열 요소에 접근할 수 없습니다. 하지만, 음수가 아닌정수
(또는 해당 수의 문자열 형식)를 인덱스로 사용하여 접근해야합니다.
arr["name"] -> 이런식이 연관배열
인덱스가 아니라 배열에 있는 값을 이용해 데이터에 접근한다.
map이나 hashmap, json에 가깝다.
*/
//참조형 변수는 특별한 조치를 취하지 않으면 얕은 복사를 한다.
// 얕은복사 : 배열복사 연산은 얕은 복사본을 생성합니다.

let b = arr; //b라는 변수에는 arr에 있는 데이터 참조값(heap메모리의 주소값)
            //을 복사하기 때문에 둘다 동일한 데이터공간을 참조하고있다.

b[0]=8
console.log(arr)
console.log(b)

// 깊은복사
 let c = [...arr]

 // 좌변에는 변수만 올수있고 우변은 마음대로
 // -할당연산자 좌측의 변수에 값이나 메모리를 할당한다
