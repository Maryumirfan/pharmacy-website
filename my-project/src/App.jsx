import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register';
import Login from './login';
import Home from './home';
import Meds from './pharm';
import C1 from './c1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signout from './signout';
import C4 from './c4';
import C2 from './c2';
import C3 from './c3';
import C5 from './c5';
import C6 from './c6';
import C7 from './c7';
import C8 from './c8';
import C9 from './c9';
import C10 from './c10';
import C11 from './c11';
import C12 from './c12';
import About from './about';
function App() {


  return (
    <>
  <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home /> } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pharm' element={< Meds />} />
          <Route path='/signout' element={<Signout />} />
          <Route path='/info' element={<C1 />} />
          <Route path='/info2' element={<C2 />} />
          <Route path='/info3' element={<C3 />} />
          <Route path='/info4' element={<C4 />} />
          <Route path='/info5' element={<C5 />} />
          <Route path='/info6' element={<C6 />} />
          <Route path='/info7' element={<C7 />} />
          <Route path='/info8' element={<C8 />} />
          <Route path='/info9' element={<C9 />} />
          <Route path='/info10' element={<C10 />} />
          <Route path='/info11' element={<C11 />} />
          <Route path='/info12' element={<C12 />} />
          <Route path='/about' element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
