import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/layout';
import Home from './component/home';
import Counter from './component/counter1';
import Counter2 from './component/counter2';
import Counter3 from './component/counter3';
import Calculator from './component/calculator';
import { AppProvider } from './component/mycontext';
import Logon from './component/logon';
import AlbumList from './component/albumList';
import PhotoList from './component/photoList';
import PostList from './component/postLIst';
import CommentList from './component/commentList';
import CommentListdetail from './component/commentListdetail';

function App() {
  return (
    <div className='App'>
    <AppProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Logon />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/counter2' element={<Counter2 />}></Route>
        <Route path='/counter3' element={<Counter3 />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        <Route path='/album/list' element={<AlbumList />}></Route>
        <Route path='/photo/list' element={<PhotoList />}></Route>
        <Route path='/user/posts/list' element={<PostList />}></Route>
        <Route path='/user/comment/list' element={<CommentList />}></Route>
        <Route path='/user/comment/detail' element={<CommentListdetail />}></Route>
        </Route>
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
