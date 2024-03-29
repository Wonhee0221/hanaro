import { useReducer, useState } from "react";
import { CalculatorAction2, CalculatorStateType } from "./type/commonType";
import {CalculatorReducer} from "./reducer/calculatorReducer";
function Calculator(){
  const initialState:CalculatorStateType = {x:"",y:"",result:"",operator:""}
  const [state, dispatch]= useReducer(CalculatorReducer,initialState);

  const [x,setX] = useState<string>("")
  const [y,setY] = useState<string>("")
  const xChange = (e:any) =>setX( e.target.value )
  const yChange = (e:any) =>setY( e.target.value) 

  
  const Add = ()=>{
    let params : CalculatorStateType = {x:x,y:y,result:"",operator:""}
    dispatch({type:"ADD", value: params})}
  const Sub = ()=>{
    let params : CalculatorStateType = {x:x,y:y,result:"",operator:""}
    dispatch({type:"SUB", value: params})}
  const Div = ()=>{
    let params : CalculatorStateType = {x:x,y:y,result:"",operator:""}
    dispatch({type:"DIV", value: params})}
  const Mul = ()=>{
    let params : CalculatorStateType = {x:x,y:y,result:"",operator:""}
    dispatch({type:"MUL", value: params})}

  return(
    <div>
      x: <input type="text" onChange={xChange} value={x} /><br />
      y: <input type="text" onChange={yChange} value={y} /><br />
      <button type="button" onClick={Add}>+</button>&nbsp;
      <button type="button" onClick={Sub}>-</button>&nbsp;
      <button type="button" onClick={Div}>/</button>&nbsp;
      <button type="button" onClick={Mul}>*</button>&nbsp;

      <h1>결과:{state.x} {state.operator} {state.y} =  {state.result}</h1>

    </div>
  )
}

export default Calculator;