import { useLocation ,useNavigate} from "react-router-dom";
import {useEffect} from "react"

function Page2() {
  const navigate = useNavigate();
  let location = useLocation();
  const goBackward = ()=>{
  navigate(location.state.from,{state:location.state}); //받아 왔던 데이터를 다시 넘긴다.
  }
  useEffect(()=>{
    console.log(location)
  },[])
  return (
    <>
    <h3>Page2{location.state.username}</h3>
    {/* <button type="botton" onClick={goFoward}> 앞으로 </button> */}
    <button type="botton" onClick={goBackward}> 뒤로 </button>
    </>
    );
}

export default Page2;