import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgentPage.css'; // Create this CSS file

const AgentPage = () => {
    const data = [
        { name: 'abc', quantity: 300, mobile: 12345678, address: 'Shanti Nagar',description:""},
        { name: 'abc', quantity: 300, mobile: 12345678, address: 'Shanti Nagar' },
        { name: 'abc', quantity: 300, mobile: 12345678, address: 'Shanti Nagar' },
        { name: 'abc', quantity: 300, mobile: 12345678, address: 'Shanti Nagar' },
        { name: 'abc', quantity: 300, mobile: 12345678, address: 'Shanti Nagar' },
        { name: 'abc', quantity: 300, mobile: 12345678, address: 'Shanti Nagar' },
    ];

    return (
        <div className='parent'>
          <h1>Donors in your city</h1>
            <div className='card-container'>
                {data.map((item, key) => (
                    <div key={key} className='card-item'>
                        <Card style={{}}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Quantity: {item.quantity}<br />
                                    Mobile: {item.mobile}<br />
                                    Address: {item.address}<br />
                                    Description:{item.description}
                                </Card.Text>
                                <Button variant='dark'>Accept</Button>
                            </Card.Body>
                        </Card>
                    </div>
                     ))}
                     </div>
                 </div>
             );
         };
         
         export default AgentPage;
