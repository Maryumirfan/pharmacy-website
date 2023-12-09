import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './pharm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavScroll from './navbar';
function Meds() {
     const [news, setNews] = useState([]);
     const [searchTerm, setSearchTerm]= useState("");
     const navigate = useNavigate();
     useEffect(() => {
        axios
        .get('./data.json')
        .then((res) => {
        console.log(res.data.medicines);
        setNews(res.data.medicines);
});
}, []);
const handleSearch= () => {
    const filteredNews = news.filter((medicine) =>
medicine.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
setNews(filteredNews);
};
    return (
        <div>
            < NavScroll/>   
            <div>
            <Form.Group className="search">
        <Form.Control type="text" placeholder="Search For Medicines..."  value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}/> 
        <Button  onClick={handleSearch} className='btn5'>
        Search
      </Button>
      </Form.Group>
      <div>
      <div className="row textcenter" style={{backgroundColor:'white', textAlign: 'center'}}>
        <div clas></div>
{news.map((val) => (
<Card key={val.name} style={{ width: "20rem", backgroundColor: '#1e425f', boxShadow: '1px 1px 4px solid black', border:'1px solid black'}}> 
<Card.Img variant="top" src={val.image_url} style={{marginTop: '10px',border: '2px solid white', boxShadow: '2px 2px 5px solid black'}} />
<Card.Body className='b'>
<Card.Title>{val.name}</Card.Title>
<Button className='btn6'>Go somewhere</Button>
</Card.Body>
</Card>
))}
    </div>  
      </div>
      
            </div>
      
        </div>
    )
}
export default Meds;
