import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register';
import Login from './login';
import Home from './home';
import Meds from './pharm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
  <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home /> } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pharm' element={< Meds />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
