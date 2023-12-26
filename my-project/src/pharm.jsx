import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pharm.css';
import NavScroll from './navbar';
import jsonData from './data.json'; 


function Meds() {
  const medicines = jsonData.medicines;

  return (
    <div>
      <NavScroll />
      <div className="container">
        <div className="row" style={{ }}>
          {medicines.map((item) => (
            <div key={item.name} className="col-md-4 mb-3">
              <Card style={{ backgroundColor: 'Transparent', boxShadow: '1px 1px 4px solid black', border: '1px solid black' }}>
                <Card.Img variant="top" src={item.image_url} style={{ marginTop: '10px', border: '2px solid white', boxShadow: '2px 2px 5px solid black' }} />
                <Card.Body className='b'>
                  <Card.Title>{item.name}</Card.Title>
                  <Button className='btn6' >Details</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meds;

