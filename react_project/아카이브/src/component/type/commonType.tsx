// 상태 정보 타입.
export interface MyState {
  count: number;
}
export type CounterAction =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'reset' }
  | { type: 'add'; count: 5 };

  //함수의 경우는 export {함수명1, 함수명2}.... 이렇게 하면된든데
  // 타입의 경우는 type앞에 직a접 기술해야 한다.

export type CalculatorStateType={
  x:number;
  y:number;
  result:number;
  operator:string;
}
export type CalculatorAction = 
                        {type:"ADD"}
                        |{type:"SUB"}
                        |{type:"DIV"}
                        |{type:"MUL"}
                        |{type:"RESET", x:0,y:0,result:0,operator:""}