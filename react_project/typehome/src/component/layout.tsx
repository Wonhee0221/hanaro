import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>메뉴 추가해도 되고 안해도 ㅇㅇ</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
