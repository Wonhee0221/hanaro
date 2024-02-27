import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState<number>(0);
  // useReducer 사용해 함수 2개를 외부로 내보려고 함.
  // increase, decrease가 백엔드와 통신을 할때...
  // 각 컴포넌트마다 통신을 담당할 코드가 엄청 많기 때문에
  // 이걸 한 곳에 몰아서 처리 해준다!

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>현재 카운트: {number}</h1>
      <button type='button' onClick={increase}>
        ++
      </button>
      <button type='button' onClick={decrease}>
        --
      </button>
    </div>
  );
}

export default Counter;
