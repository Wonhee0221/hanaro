//logon.tsx
// 리듀서
// 컨텍스트 프로바이더

import { createContext, useReducer,Dispatch } from 'react';
import { StateType, LogonAction } from './type/commonType';

// 기본값 전달 - 시작할때 전달
const initalState:StateType={userid:"",username:"",isLogon:false}

// Reducer 따로 생성( 반환값도 타입 설정 해주어야한다. )
function LogonReducer(state:StateType, action:LogonAction):StateType{
  switch(action.type){
    // fetch나 axios 써서 데이터 갖고 와서 로그온 작업 제대로
    case "LOGON":
      return{...state, userid:action.value.userid, username:action.value.username,isLogon:action.value.isLogon}
    case "LOGOUT":
      return{...state, userid:"", username:"",isLogon:false} //initalState 이거 사용가능한가? userid:"", username:"",isLogon:false 이거 대신?
    case "RESET":
      return initalState
    default:
      throw new Error("알수없는 에러") 
    }
}

const AppProvider = ({children}:{children:any})=>{
  const [state, dispatch] = useReducer(LogonReducer, initalState);
  /** 주의사항 : return  구문뒤에 괄호열기 붙혀야한다. */
  return(
    <AppContext.Provider value= {{state,dispatch}}>
      {children}
    </AppContext.Provider>
  )
}


const AppContext = createContext<{state:StateType, dispatch:Dispatch<LogonAction>}>(
  {
    state:initalState, dispatch:()=>null
  }
)
export {AppContext,AppProvider} // 컨텍스트랑 컨텍스트 프로바이더