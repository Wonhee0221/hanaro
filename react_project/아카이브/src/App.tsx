import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/layout';
import Home from './component/home';
import Counter from './component/counter1';
import Counter2 from './component/counter2';
import Counter3 from './component/counter3';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/counter2' element={<Counter2 />}></Route>
        <Route path='/counter3' element={<Counter3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
