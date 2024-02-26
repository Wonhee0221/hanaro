// 상태 정보 타입.
import { MyState, CounterAction } from "../type/commonType";

function MyStateReducer(state: MyState, action: CounterAction): MyState {
  switch (action.type) {
    case 'increase':
      // 새로운 상태 반환 - db로부터 데이터를 읽어온다.
      // json 전개. 앞의 state에 현재 상태 추가하기.
      return { ...state, count: state.count + 1 };
    case 'decrease':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'add':
      return { ...state, count: state.count + action.count }; // state.count가 아닌 이유???

    default: // 예외처리
      throw new Error('에러 발생~~~'); // throw가 return을 반환.
  }
  // MyState를 반환한다고 했으니까 반드시 반환해주어야 함
  return { count: 0 };
}
export { MyStateReducer };
