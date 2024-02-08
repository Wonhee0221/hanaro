console.log("0 == null :",0 == null);
console.log("0 == false:",  0 == false);
console.log("null == false:",  null == false);
console.log("undefined == false:",  undefined == false);
console.log("undefined == null:",  undefined == null);

let a = [], b='' , c="false", d ="0";
console.log(a?'T':'F', !!b,!!c,!!d);
console.log(''==false)
/*
 a는 비어있는 객체 = > [a?'T':'F'] /true 객체가 아니면 T null이면 F
 a= []

 b를 공백으로 주고나서 b는 true인가? 물어보는것 . 공백 = 0 = false
 !!은  부정의 부정은 긍정, 원상복구임. !는 true일때 false로 바뀌는데
 !!b 하면 공백이 나오는게 아니라 false가나옴


*/