import { useReducer, useState } from 'react';
import { MyStateReducer } from './reducer/myreducer';
import { MyState, CounterAction } from './type/commonType';


// reducer 에게 초기상태를 전달해주어야 함.
// const initialState:MyState - 변수선언문
// {count: 0} - 초기값

// reducer한테 전달할 함수 만들자
// 매개변수는 1번째: 이전 state, 2번째: 함수
// typescript: 함수 선언 시 매개변수 타입 o, 반환값 타입 o
// 다른 곳으로 분리시키기.

function Counter3() {
  const initialState: MyState = { count: 0 };

  const [number, setNumber] = useState<MyState>({ count: 0 });
  // useReducer 사용해 함수 2개를 외부로 내보려고 함.
  // increase, decrease가 백엔드와 통신을 할때...
  // 각 컴포넌트마다 통신을 담당할 코드가 엄청 많기 때문에
  // 이걸 한 곳에 몰아서 처리 해준다!
  const [status, dispatch] = useReducer(MyStateReducer, initialState);

  // 앞에서 상태정보, dispatch: 함수
  // StaateReducer를 dispatch를 써서 호출해라라는 뜻.

  const increase = () => {
    dispatch({ type: 'increase' });
  };
  const decrease = () => {
    dispatch({ type: 'decrease' });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  const add = () => {
    dispatch({ type: 'add', count: 5 });
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
      <button type='button' onClick={reset}>
        초기화
      </button>
      <button type='button' onClick={add}>
        +5
      </button>
    </div>
  );
}

export default Counter3;
