import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgentPage.css'; // Create this CSS file
import { useUserAuth } from '../../store/userAuth';

const PastDonations = () => {
    const {getFood,userFood} = useUserAuth()
    useEffect(()=>{
        getFood();
    },[])
    return (
        <div className='parent '>
          <h1>Your Donations</h1>
            <div className='card-container'>
                {userFood.map((item, key) => (
                    <div key={key} className='card-item'>
                        <Card style={{}}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text style={{fontWeight:"500"}}>
                                    Description: {item.description}<br />
                                    Quantity: {item.quantity}<br />
                                    {/* food-type: {item.address}<br /> */}
                                    assigned:{item.assigned}<br />
                                    delivered:{item.delivered}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                     ))}
                     </div>
                 </div>
             );
         };
         
         export default  PastDonations
