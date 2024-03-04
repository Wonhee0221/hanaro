import { Outlet,NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function MemberLayout() {
  return ( 
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" href="#none">게시판</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#none">상품</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#none">Logout</NavLink>
          </li>
          </ul>
      </nav>
      <Outlet/>
    </div>
   );
}

export default MemberLayout;