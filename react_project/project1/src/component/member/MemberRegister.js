import axios from "axios";
import { useState } from "react";

function MemberRegister() {
  //항목이 많아서 json 형태로 함.
  const [memberInfo, setMemberInfo] = useState({});
  const [idcheckyn,setIdCheckYn] = useState('N');
  const {userid,password,password2,username,phone,email} = memberInfo; // 해체

  //onChange 이벤트 처리 태그들이 id나 name 속성이라도 부여되어야 구분이 가능하다.
  const onChange = (e)=>{
    const {value,name} = e.target;// e: 객체
                                  // target : 이벤ㄴ트가 발생한 객체 참조이다.
                                  // value : 입력된 값, name :name 속성값을 읽어온다.
    setMemberInfo({...memberInfo,[name]:value});
    console.log(memberInfo);
  }
  const goUseridCheck =()=>{
    //axios로 백엔드에 정보를 전송 후 id가 사용가능한지를 가져온다.
    let url = `http://127.0.0.1:8080/api/idcheck?userid=${userid}`
    axios.get(url)
    .then((res)=>{
      if (res.data == "OK"){
        alert("사용가능한아이딥니다")
        setIdCheckYn("Y")
        // 컨트롤러 두개를 처리를 해줘야야한다.
        document.querySelector("#userid").readOnly=true;
        document.querySelector("#btncheck").disabled=true;
      }
      else{
        alert("이미사용중인 아이디입니다.")
      }
    })
  }
  // new URLSearchParams()
    const goMemberRegister =()=>{
    //axios로 백엔드에 정보를 전송 후 id가 사용가능한지를 가져온다.
    if(idcheckyn!="Y"){
      alert("아이디 중복체크를 하세요")
      window.document.getElementById("userid").focus();
      return
    }else{
      axios.post(
        "http://127.0.0.1:8080/api/insert",
        {
            userid: userid,
            password: password,
            username: username,
            phone: phone,
            email: email,
        }
    )
    .then(function (response) {
        console.log("성공", response);
        // 여기서 등록성공하면 메인이나 로그온 화면으로 이동한다.
        // response
    })
    .catch(function (error) {
        // 오류발생시 실행
        console.log("실패", error);
    })
    .then(function () {
        // 항상 실행
        console.log("데이터 요청 완료");
    });
    }
  }
  return ( 
    <div>
      <div className="container mt-3">
        <h1>회원가입</h1>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="아이디" name="userid" id="userid" onChange={onChange} value={userid}/>
            <div className="input-group-append">
              <button className="btn btn-success" id="btncheck" type="submit" onClick={goUseridCheck}>중복체크</button>  
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" name="password" id="password" placeholder="페스워드" onChange={onChange} value={password}/>
          </div>

          <div className="input-group mb-3">
            <input type="password" className="form-control" name="password2" id="password2" placeholder="패스워드확인"onChange={onChange} value={password2}/>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="이름" name="username" id="username"onChange={onChange} value={username}/>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="email" name="email" id="email"onChange={onChange} value={email}/>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="전화번호" name="phone" id="phone"onChange={onChange} value={phone}/>
          </div>
          


          {/* <!-- 다음 우편 api :주소체계 번지 -> 길  --> */}
          
            <div className="container" style={{"textAlign":"right"}}>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={goMemberRegister}>등록</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-primary" onClick={()=>null}>취소</button>&nbsp;&nbsp;
            </div>
          </div>
        </div>
    </div>
   );
}

export default MemberRegister;