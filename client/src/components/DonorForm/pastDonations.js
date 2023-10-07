import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgentPage.css'; // Create this CSS file

const AgentPage = () => {
    const data = [
        { quantity: 300, description:"",foodType:"",assigned:true,delivered:true},
        { quantity: 300, description:"",foodType:"" },
        { quantity: 300, description:"",foodType:"" },
        { quantity: 300, description:"",foodType:"" },
        { quantity: 300, description:"",foodType:"" },
        { quantity: 300, description:"",foodType:"" },
       
    ];

    return (
        <div className='parent'>
          <h1>Your Past Donations</h1>
            <div className='card-container'>
                {data.map((item, key) => (
                    <div key={key} className='card-item'>
                        <Card style={{}}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text style={{fontWeight:"500"}}>
                                    Description: {item.description}<br />
                                    Quantity: {item.quantity}<br />
                                    food-type: {item.address}<br />
                                    assigned:{item.assigned?("true"):("false")}<br />
                                    delivered:{item.delivered?("true"):("false")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                     ))}
                     </div>
                 </div>
             );
         };
         
         export default AgentPage;
