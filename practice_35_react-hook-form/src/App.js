import './App.css';

import HomePage from './pages/HomePage';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CallbackPage from './pages/CallbacksPage';
import { useRef, useState } from 'react';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <h1>This is universal header</h1>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/callbacks'>Callback Page</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/callbacks' element={<CallbackPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;