// 연습문제 1
for( let i =0.1; i<1; i= i+0.1 ){
  console.log(i.toFixed(1))
}

// 연습문제 2
let addPoints = (a,b)=>{
  x = a.toString().split('.')
  y = b.toString().split('.')

  c = (x[1].length, y[1].length)
  return console.log((a+b).toFixed(c));
}

addPoints(0.14,0.28)
addPoints(0.14,0.284024)
