// 동기모드는 평상시 프로그래밍 모드이다. 그냥 우리가 코드짜는 게 다동기모드임.
// 동기모드 : A,B,C 가 있으면 A시작하고 끝나고 B시작하고 끝나고 C시작하고 끝나고
// 비동기모드는 각자시작하고 리턴함.
/* 
  A를 시작하고 업무가 안끝나도 함수를 바로 리턴한다.
  B를 시작하고 업무가 안끝나도 함수를 바로 리턴한다.
  C를 시작하고 업무가 안끝나도 함수를 바로 리턴한다.

  시스템이 백그라운드에서 나머지 일들을 끝낸다. 그럼 작업이 완료되었음을 알려야하는데
  그것을 콜백함수로 알려준다. 완려된 일의 결과도 콜백함수를 통해서 알려준다.

  let result = callFuntion(); // 결과가 반환 값으로 전달되도록 구성한다.
    - 비동기 모드 -
    callFuntion(callbackFunc(){
      여기서 일이 완료되었을을 알 수있다.
      여기서 나머지 처리를 해야한다.
    });
    -코드- 여기에 코드가 있으면 얘를 먼저 실행할수도있게 된다.
 */

let fs = require("fs");
let result = fs.readFileSync("동기모드.js","utf8");
console.log(result);
console.log("ending........")