// 얘는 파일을 들고 오는 거 이기 때문에 파일명 출동안나게 하기

function sigma(limit=10){
  if (limit<10)
    return ;// 값을 지정안하면 undefined가 전달된다

  let s = 0;
  let i;
  for(i=1 ;i<=limit ;i++){
    s+=i
  }
  return s
}
console.log(sigma());
console.log(sigma(100));

// 다른파일에서 이 함수를 접근 할 수 있게해줌
// exports가 노출의 의미.

exports.sigma = sigma;
// 불러올 때 함수이름을 따로 설정할 수도 있다 :  exports["s"] = sigma

function toupper(words){
  return words.toUpperCase();
}

exports['bigword'] = toupper;