interface User{ // 자료1
  id:number
  name:string;
}

interface Dept{  //자료2
  id:number
  dname:string;
  captain:string;
}

interface Ud2{
  [temp:string]:number|string; //temp은 아무거나 쓴거임 변수명은 ㅏ알아서 설정가능
  phone:string;
}
const ud2:Ud2={id:1,name:"HH",addr:'Seoul', phone:"010-12312-1323"}
const ud3:Ud2={id:1,dname:"HH",captain:'HH',addr:'Seoul',phone:"010-12312-1323"}

console.log ( ud2 )
console.log ( ud3 )