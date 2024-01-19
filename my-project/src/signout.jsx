import React from 'react';
import { Link} from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import './signout.css'
function Signout() {
    return (
        <div className='si'>
            
            <h2 className='head2'>We hope that you had a good Experience!</h2>
        
        <Button className='btn7'><Link to='/login' className='l3'>Back to LogIn</Link></Button>
        </div>
    );
}

export default Signout;