import { Outlet } from "react-router-dom";

function BoardLayout() {
  return ( 
    <>
    {/* Outlet가 출력할 내용이 올 위치 */}
     <Outlet/>
     </>
   );
}

export default BoardLayout;