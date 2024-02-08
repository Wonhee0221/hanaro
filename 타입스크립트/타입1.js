var a;
// a = "홍길동" // 타입스크립트 상태에서 에러이고, 자바스크립트에선 문제없이 돌아감.
a = 7.8;
console.log("a = ", a);
// a = [1,2,3]
// console.log("a = " ,a)
var arr; //배열도 안에 들어가는 것에 따라서 타입을 지정해줘야한다.
arr = [1, 2, 3];
console.log("arr = ", arr);
var words;
words = ["english", "korea", "america", "japan"];
words.forEach(function (item) {
    console.log(item);
});
