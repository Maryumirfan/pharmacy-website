import React from 'react';
import { Link} from 'react-router-dom'; 
import './home.css';
import NavScroll from './navbar';
function Home() {
    return (
        <div className='home'>
          <NavScroll />  
          <div className='d4'>
          <div className='d5'></div>
             <div className='bg'></div>       
               <h1 className='wel'>WELCOME! To Health Care,</h1>
               <h3 className='priority'>where your health is our priority</h3>
               <p className='quote'>"Proudly serving our local community with a commitment to <br /> health and happiness."</p>
               <div className='d3'>
               <button className='btn2'> 
        <Link className='l2' to='/news'>Get Started</Link>
      
      </button>
               </div>
      
          </div>
            
           
        </div>
    );
}

export default Home;
