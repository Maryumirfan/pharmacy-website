import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
     
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", name, email, password);
    axios
      .post("http://localhost:3003/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className='register'>
      <div className='d1'>
      <Form onSubmit={HandleSubmit} className='form' >
      <h3>CREATE ACCOUNT</h3> 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Your Name" required 
         onChange={(e) => {
          setName(e.target.value);
        }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Enter email" required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
         />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">

        <Form.Control type="password" placeholder="Password" required 
         onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree all statements in Terms of services" required/>
      </Form.Group> 
      <Button  type="submit" className='btn'>
        SIGN UP
      </Button> 

      <h6  className='hh'>Have already an account?<Link to="/login" className='link'> Login Here</Link></h6>
    </Form>
      </div>
    
    </div>
   
  );
}

export default Register;    