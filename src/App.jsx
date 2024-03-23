import React from 'react';
import Register from './Res';
import './App.css';
import Login from './Login';
import Home from './Home';

import { Router,Route, Routes } from 'react-router-dom';

function App() {

  return (
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>

        </Routes>
      
  )
}

export default App
