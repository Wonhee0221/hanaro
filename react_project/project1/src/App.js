import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import BasicLayout from './layout/BasicLayout'
import MainPage from './component/main/MainPage'
import MemberLayout from './layout/MemberLayout'
import BoardLayout from './layout/BoardLayout'
import MemberRegister from './component/member/MemberRegister'
import 'bootstrap/dist/css/bootstrap.min.css'
import BoardList from './component/board/board_list';
import BoardView from './component/board/board_view';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BasicLayout/>} >
          <Route index element={<MainPage/>}/>
        </Route>
        <Route path="/member" element={<MemberLayout/>} >
          <Route index element={<MemberRegister/>}/>
        </Route>
        <Route path="/board" element={<BoardLayout/>} >
          <Route index element={<BoardList/>}/>
          <Route path="view/:id" element={<BoardView/>}/>
          {/* path="/board" 이 url로 시작한 경우 BoardLayout이 처리한다. 전체 윤곽을 담당 */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
