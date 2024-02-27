import { CalculatorAction, CalculatorAction2, CalculatorStateType } from "../type/commonType";

//reducer로 사용할 함수의 매개변수 state, action이 된다.
function CalculatorReducer(state:CalculatorStateType, action: CalculatorAction2):CalculatorStateType {
  switch(action.type){
    case "ADD":
      {
      //var쓰면 같은 함수내에서는 서로 다른 볼록이라도 같은 변수로 인식한다. 그래서 사용 잘안함.
      // let은 블록내에서만 사용하기 때문에 같은 함수내에서라도 블럭처리를 하면 오케이다.
      let result = parseInt(action.value.x)+parseInt(action.value.y)
      return{...state,"result":result.toString(), "operator":"+" ,x:action.value.x,y:action.value.y}
    }
    case "SUB":
      {
        let result = parseInt(action.value.x)-parseInt(action.value.y)
        return{...state,"result":result.toString(), "operator":"-", x:action.value.x,y:action.value.y}}
    case "DIV":
      {
        let result = parseInt(action.value.x)/parseInt(action.value.y)
        return{...state,"result":result.toFixed(2).toString(), "operator":"/",x:action.value.x,y:action.value.y}}
    case "MUL":
      {
        let result = parseInt(action.value.x)*parseInt(action.value.y)
        return{...state,"result":result.toFixed(2).toString(), "operator":"*",x:action.value.x,y:action.value.y}}
    default:
      throw new Error("지원하지 않는 액션입니다.");
  }
  return {x:"0",y:"0",result:"0",operator:""}
}

export {CalculatorReducer};