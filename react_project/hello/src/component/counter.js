import React from 'react'
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // React라서 React. 안붙혀도 됨.
  const increase=()=>{
    setCount(parseInt(count)+1)
  }
  const decrease=()=>{
    setCount(parseInt(count)-1)
  }
  return (
    <div>
      <h3>현재카운트  : {count}</h3>
      <button type="button" onClick={increase}>++</button>
      <button type="button" onClick={decrease}>--</button>
    </div>
   );
}

export default Counter;