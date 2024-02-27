import { useState , useContext } from "react";
import { AppContext } from "./mycontext";

function Logon() {
  const [userid, setUserid] = useState<string>("");
  let context = useContext(AppContext)

  let onChange = (e:any)=>{
    setUserid(e.target.value);
  }
  let logon = ()=>{
    context.dispatch({type:"LOGON", value:{userid:userid,username:"홍길동",isLogon:true}})
  }
  let logout =()=>{context.dispatch({type:"LOGON", value:{userid:"",username:"",isLogon:false}})
}
  return ( 
    <div>
      <h1>로그온 여부</h1>
      <p></p>
      <input type="text" id="userid" onChange={onChange} value={userid} />
      <button type="button" onClick={logon} >로그온</button>
      <button type="button" onClick={logout}>로그아웃</button>
    </div>
   );
}

export default Logon;