import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate= useNavigate();
  const goMemberRegister=()=>{
    alert("회원가입")
    navigate("/member") //회원가입페이지로 이동
  }
  const goBoard=()=>{
    alert("리스트")
    navigate("/board") //게시판페이지로 이동
  }
  return ( 
    <>
      <botton className="button btn-primary" type="button" onClick={goMemberRegister}>
        회원가입
      </botton><br/><br/><br/>
      <botton className="button btn-primary" type="button" onClick={goBoard}>
        게시판으로
      </botton>
    </>
   );
}
export default MainPage;