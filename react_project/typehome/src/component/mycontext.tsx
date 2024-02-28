//logon.tsx
// 리듀서
// 컨텍스트 프로바이더

import { createContext, useReducer,Dispatch, useEffect } from 'react';
import { StateType, LogonAction } from './type/commonType';
import axios from 'axios';

// 기본값 전달 - 시작할때 전달
const initalState:StateType={userid:"",username:"",isLogon:false}



// Reducer 따로 생성( 반환값도 타입 설정 해주어야한다. )
// Redeucer은 상태변경 외에는 사용하지 말자, 미들웨어로 번경해주자.Redux같은 라이브러리 이용하자
function LogonReducer(state:StateType, action:LogonAction):StateType{
  switch(action.type){ // dispatch에서  type으로 넘겼기 때문에 단순히 type으로 구분한것이다.
    // fetch나 axios 써서 데이터 갖고 와서 로그온 작업 제대로
    // userid 가져와서 axios를 이용해서 api 서버와 통신 후 
    // 가져온 값을 넣는다. return 시점이 then안에서 하거나
    // async, await를 사용해야 한다.
    case "LOGON":{
        let newState = {...state, userid:action.value.userid, 
          username:action.value.username,
          isLogon:true};// 새로운 상태만들고
          saveStateToLocalStorage("appState",newState) //로컬스토리지 사용정보 끼워둠
          return newState;        // 반환하고
      }
    case "LOGOUT":{
      let newState = {...state, userid:"", 
        username:"",
        isLogon:false}; 
      saveStateToLocalStorage("appState",newState)
      return newState;
    }
    case "RESET":
      return initalState
    default:
      throw new Error("알수없는 에러") 
    }
}

const AppProvider = ({children}:{children:any})=>{
  // F5를 누르면 Provider가 계속 초기화된다.
  const [state, dispatch] = useReducer(LogonReducer, initalState);
  /** 주의사항 : return  구문뒤에 괄호열기 붙혀야한다. */
  // useEffect는 사용안함.
  // useEffect(()=>{
    // saveStateToLocalStorage("appState",state);

    //현재상황 저장, state의 값이 바뀔 때마다 호출된다.
    // 배열의 경우에는 직접 배열을 []에 쓰면안되고
    // 일반 값 변수 하나를 선언한 다음 그 변수를 감시하다가 그 변수값이
    // 바뀌었을 경우에 다시 서버로 부터 값을 가져오게 하면된다.
    // 랜더링이 기본 세번호출된다.
    // 1. 컴포넌트가 마운트가 될때, 2. 컴포넌트가 마운트 해제될때.
    // 3. 변수의 값이 바뀔때 => loading 변수등을 활용해라.
    // state의 상태 변환시마다 이 부분이 호출된다.
  // },[]) 
  
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

// useContext의 장점은 부모 컴포넌트 ==> 자손 컴폰넌트 사이이에 동일한 데이터공유를 위해 사용한다.
// 문제점 context의 Provider로 값을 주는데 Provider만 쓰면 중간에 데이터를 수정이 안되서
// 고객맞춤으로다가 커스터마이징을 해주어야한다. 프로바이더 할때 자식노드가 따라 들어가는게 커스터마이징?
// 매개변수가 children 함수로 한번 감싸면서 내부에서 useState를 통해서 데이터 함수들을 json형태로
// 외부로 노출 시킬 수 있다. 
// 외부로 함수를 노출할때 그냥해도 되지만 useReducer를 통해서 state와 함수를 분리해서 사용하기도 한다.
// 컨텍스트에 부여된 값은 F5버튼(새로고침)을 누르면 정보가 다 날라간다.

// 컨텍스트 내용을 로컬 스토리지나 세션,쿠키 등에 저장한다.
// any: 자바로 따지면 Object역할 을한다.
// 로컬 스토리지 만들기
const saveStateToLocalStorage = (key:string, state:any)=>{
  //키와 값 구조, java의 HashMap 과 비슷, JSON처럼 키와 값
  // json객체를 => string 구조로 변경한다. JSON.stringfy <=> JSON.parse
  //모던 스크립트 라이브러리 : JSON
  // 컬렉션["loginInfo"] = "값"
  localStorage.setItem(key,JSON.stringify(state)) //localStorage.setItem("키",값)

}
const getStateFromLocalStorage = (key:string)=>{
  const savedState = localStorage.getItem(key);
  return savedState? JSON.parse(savedState):{}; // 두개의 
  // savedState 가 nulll이면 {} 비어있는 JSON객체 반환
  // null이 아니면 읽어온 데이터를 파싱해서 변환한다.
}

export {AppContext,AppProvider, saveStateToLocalStorage, getStateFromLocalStorage} // 컨텍스트랑 컨텍스트 프로바이더내보내기
