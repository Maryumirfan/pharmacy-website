
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MedDetails({ medData }) {
  return (
    <div>
      <Card
        style={{
          width: '20rem',
          backgroundColor: '#1e425f',
          boxShadow: '1px 1px 4px solid black',
          border: '1px solid black',
        }}
      >
        <Card.Img
          variant="top"
          src={medData.image_url}
          style={{
            marginTop: '10px',
            border: '2px solid white',
            boxShadow: '2px 2px 5px solid black',
          }}
        />
        <Card.Body className="your-valid-class-name">
          <Card.Title>{medData.name}</Card.Title>
          <Card.Text>{medData.description}</Card.Text>
          <Card.Text>
            <strong>Side Effects:</strong> {medData.side_effects}
          </Card.Text>
          <Card.Text>
            <strong>Precautions:</strong> {medData.precautions}
          </Card.Text>
          <Button className="btn6">Go back</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MedDetails;
