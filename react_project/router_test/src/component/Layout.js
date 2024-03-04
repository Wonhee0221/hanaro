import { Outlet } from "react-router-dom";

function Layout() {
  return ( 
    <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <span className="navbar-text">하나은행</span>
      </div>
    </nav>
    {/* 컨테이너 교체를 지시하면 <Outlet/>위치에 컨테이너 내용이출력된다.
    useNavigate, Link와 NavLink => 컴포넌트 교체의 개념
    a(html), location(js) = react아니다. react의 SPA 개념을 모른다. 페이지교체의 개념
     */}
     <div style={{"marginTop":"20px"}}></div>
    <Outlet/>
    </>
   );
}

export default Layout;