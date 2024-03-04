import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      {/* Router을 제공한다 -- 전체화면 윤곽이 있는 파일이 존재해야한다.  
      
      Layout 컴포넌트 안에 <Outlet/> 있어야한다.outlet 파트가 컴포넌트가 출력되는 위치다.
      절대적으로 생략이 불가능하다.*/}
      <Routes>
        <Route path="/" element={<Layout/>}>
        {/* http://127.0.0.1.:3000/ 일때 => index로 써 있는 페이지가 기본으로 뜬다. */}
          <Route index element={<Page1/>}/>
          <Route path="/second" element={<Page2/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
