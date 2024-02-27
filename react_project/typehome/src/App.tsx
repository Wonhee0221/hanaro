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

function App() {
  return (
    <div className='App'>
    <AppProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        <Route path='/logon' element={<Logon />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/counter2' element={<Counter2 />}></Route>
        <Route path='/counter3' element={<Counter3 />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        </Route>
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
