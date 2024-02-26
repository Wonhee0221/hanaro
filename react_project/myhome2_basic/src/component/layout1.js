import { Outlet } from "react-router-dom";

function Layout1() {
  return ( 
    // {/* 화면상단에 고정할 것 outlet 태그에 컴포넌트 출력*/}
    <div>
      <nav>
        <ul><li>메뉴1</li></ul>
      </nav>
      <Outlet/>{/* 컴포넌트가 출력되는 위치다. */}
      <footer>저작권 나에게 있음.</footer>
    </div>
    
   );
}

export default Layout1;