import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
/// 컴포넌트 체인지와 관련도니것은 react-router-dom 이다.
function Page1() {
  // page1=> page2로 바꾸고 싶을때
   // 이전으로 이동하라 navigate(-1)  => 컨텍스트 교체
  //  / 예전에는 history.go(-1) = > 페이지 교체이다. 의미가 없다 SPA는
  const location = useLocation();
  const navigate = useNavigate();
  const goFoward = ()=>{
    // state를 통해서 현재 내 상태정보를 전달 될 수 있다.
    navigate("/second",{state:{"username":"홍길동", age:23}});
   }
  useEffect(()=>{
    console.log("로케이션:",location)
    if(!location.state){
      console.log("start")
    }
    else{
      console.log(location)
      console.log("호출")
    }
    // fetch나 axios를 호출해서 백엔드와 통신한다.
    console.log("Page1의 태그들이 매모리에 만들어질때 : 마운트될때 호출된다")
    console.log("마운트는 이 컴포넌트로 교체될때 호출된다.")
    return()=>{
      // 이 구문에다가는 비동기 호출이 두번 호출 안되게 한다.- 대부분은 잘 안함.
      console.log("clearnup")
      console.log("unmount 될때 호출된다.")
      console.log("unmount는 내가 다른 컴포넌트로 교체될때이다")
    }
  },[])
  return (
    <>
    <h3>Page1</h3>
    <button type="botton" onClick={goFoward}> 앞으로 </button>
    </>
    );
}

export default Page1;