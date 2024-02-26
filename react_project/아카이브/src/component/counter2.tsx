import { useReducer, useState } from 'react';

// 상태 정보 타입.
interface MyState {
  count: number;
}
type CounterAction =
  | { type: 'increase'; value: MyState['count'] }
  | { type: 'decrease'; value: MyState['count'] };
// reducer 에게 초기상태를 전달해주어야 함.
// const initialState:MyState - 변수선언문
// {count: 0} - 초기값
const initialState: MyState = { count: 0 };

// reducer한테 전달할 함수 만들자
// 매개변수는 1번째: 이전 state, 2번째: 함수
// typescript: 함수 선언 시 매개변수 타입 o, 반환값 타입 o
function StateReducer(state: MyState, action: CounterAction): MyState {
  switch (action.type) {
    case 'increase':
      // 새로운 상태 반환 - db로부터 데이터를 읽어온다.
      // json 전개. 앞의 state에 현재 상태 추가하기.
      return { ...state, count: action.value };
    case 'decrease':
      return { ...state, count: action.value };
    default: // 예외처리
      throw new Error('에러 발생~~~'); // throw가 return을 반환.
  }
  // MyState를 반환한다고 했으니까 반드시 반환해주어야 함
  return { count: 0 };
}

function Counter2() {
  const [number, setNumber] = useState<MyState>({ count: 0 });
  // useReducer 사용해 함수 2개를 외부로 내보려고 함.
  // increase, decrease가 백엔드와 통신을 할때...
  // 각 컴포넌트마다 통신을 담당할 코드가 엄청 많기 때문에
  // 이걸 한 곳에 몰아서 처리 해준다!

  // const [status, dispatch] = useReducer(initialState, StateReducer);
  // 위의 코드: 왜 순서가 이게 아니지??? 첫번째가 상태, 두번째가 함수아닌가

  const [status, dispatch] = useReducer(StateReducer, initialState);
  // 앞에서 상태정보, dispatch: 함수
  // StaateReducer를 dispatch를 써서 호출해라라는 뜻.

  const increase = () => {
    dispatch({ type: 'increase', value: status.count + 1 });
  };
  const decrease = () => {
    dispatch({ type: 'decrease', value: status.count - 1 });
  };

  return (
    <div>
      <h3>Reducer 이용한 카운트</h3>

      <h1>현재 카운트: {status.count}</h1>
      <button type='button' onClick={increase}>
        ++
      </button>
      <button type='button' onClick={decrease}>
        --
      </button>
    </div>
  );
}

export default Counter2;
