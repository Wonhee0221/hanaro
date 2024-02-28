import { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./mycontext";
import axios from "axios";
import { error } from "console";

function Logon() {
  let navigate = useNavigate();
  // SPA를 유지하기위해서 사용, 외부사이트로 이동하는 a태그, location.href가 사용이불가능하기때문에
  // link나 NavLink를 사용해야한다.
  // 같은페이지(다른컴포넌트)으로 이동하려면 useNavigate를 해야한다.
  const [userid, setUserid] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  let context = useContext(AppContext)
  let onChange = (e:any)=>{
    setUserid(e.target.value);
  }
  let logon = ()=>{
    if (parseInt(userid)>=1 && parseInt(userid)<=10 ){
      console.log(userid)
      const hosturl = 'https://jsonplaceholder.typicode.com/users?id='+userid;
      axios.get(hosturl)
      .then((res)=>{
        console.log(res.data) 
        let username = res.data[0].name
        context.dispatch({type:"LOGON", value:{userid:userid,username:username, isLogon:true}})
        // 첫번째 매개변수는 라우터에서 정의한 url이다
        // 상태변경이 나중에 벌어진다. -- 비동기라서 타이밍이 안맞음
        // 첫번째 인자로 함수전달 두번째 인자로 시간전달

      setTimeout(()=>{navigate("/album/list", {})},1000)// 페이지 이동

        // navigate("이동할 페이지", {state})다른컴포넌트로 상태전달도 가능
      //스택구조임
      
        setMsg("로그인성공")
        })
        .catch((error)=>{
          console.log(error)
        })    
    }
    else{
      // 원래로그온 했던거 지워버린다
      console.log("로그인실패")
      context.dispatch({type:"LOGON", value:{userid:"",username:"",isLogon:false}})
      setMsg("로그온실패")
    }
    

  }
  let logout =()=>{context.dispatch({type:"LOGON", value:{userid:"",username:"",isLogon:false}})
}
  return ( 
    <div>
      <h1>로그온 여부</h1>
      <p></p>
      <input type="text" id="userid" onChange={onChange} value={userid} />
      <h3 style={{color:"red"}}> {msg} </h3>
      <button type="button" onClick={logon} >로그온</button>
      <button type="button" onClick={logout}>로그아웃</button>
    </div>
   );
}

export default Logon;