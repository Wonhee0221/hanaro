import { CalculatorAction, CalculatorStateType } from "../type/commonType";

//reducer로 사용할 함수의 매개변수 state, action이 된다.
function CalculatorReducer(state:CalculatorStateType, action: CalculatorAction):CalculatorStateType {
  switch(action.type){
    case "ADD":
      return{...state,"result":state.x+state.y, "operator":"+"}
    case "SUB":
      return{...state,"result":state.x-state.y, "operator":"-"}
    case "DIV":
      return{...state,"result":state.x*state.y, "operator":"*"}
    case "MUL":
      return{...state,"result":state.x/state.y, "operator":"/"}
    default:
      throw new Error("지원하지 않는 액션입니다.");
  }
  return {x:0,y:0,result:0,operator:""}
}

export default CalculatorReducer;