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
        <div className='parent1 flex flex-col gap-6'>
          <h1>Donors in your city</h1>
            <div className='grid grid-cols-3 gap-4 justify-center items-center w-full mx-20 overflow-y-auto text-black'>
                {data.map((item, key) => (
                    <div
                    key={key}
                    className=" flex flex-col items-center justify-center font-serif font-medium  mx-10 min-w-[25em] rounded-xl grad py-2 "
                  >
                    <p >Name: {item.name}</p>
                    <p >Description: {item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p className="text-base">Address: {item.address}</p>
                    <p className="text-base">Mobile: +91{item.mobile}</p>
                    
                    <Button variant='dark'>Accept</Button>
                  </div>
                     ))}
                     </div>
                 </div>
             );
         };
         
         export default AgentPage;
