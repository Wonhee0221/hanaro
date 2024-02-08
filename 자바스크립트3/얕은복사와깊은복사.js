let foods = ["삼겹살","피자",'보쌈','청국장']

foods2 = foods; //객체배열을 복사함

console.log(foods,foods2)

foods[0] = '탕수육'

console.log(foods,foods2) // 둘다 탕수육으로 바뀜. 이게 얕은복사(softcopy)이다. 동일데이터 공간을 사용한다.

foods3 = [];
for (i=0;i<foods.length;i++)
  foods3.push(foods[i])

console.log(foods3) 
foods3[0] = '갈비탕'
console.log( foods,foods2,foods3) ;

let foods4 = [...foods];
console.log(foods4)
foods4[0] = "덕복희"
console.log(foods,foods4)

