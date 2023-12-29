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
    <div className="all">
      <NavScroll />
      <div className="container">
        <div className="row">
          {medicines.map((item) => (
            <div key={item.name} className="col-md-4 mb-3">
              <Card className='card1'>
                <Card.Img variant="top" src={item.image_url} style={{ marginTop: '5px' }} />
                <Card.Body className='b'>
                  <Card.Title style={{textAlign: 'center'}}>{item.name}</Card.Title>
                  <Button className='btn6' >More Details</Button>
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

