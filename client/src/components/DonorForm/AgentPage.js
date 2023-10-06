import React from 'react'
import "./AgentPage.css"
import {BiSolidUserCircle} from "react-icons/bi"


const AgentPage = () => {
    const data = [
        {name:"abc",quantity:300,mobile:12345678,address:"Shanti Nagar"},
        {name:"abc",quantity:300,mobile:12345678,address:"Shanti Nagar"},
        {name:"abc",quantity:300,mobile:12345678,address:"Shanti Nagar"},
        {name:"abc",quantity:300,mobile:12345678,address:"Shanti Nagar"},
        {name:"abc",quantity:300,mobile:12345678,address:"Shanti Nagar"},
        {name:"abc",quantity:300,mobile:12345678,address:"Shanti Nagar"}
    ]
  return (
    <div className='parent'>
        <ul className='cards'>
            {data.map((item,key) => {
              return (<li className='card' key={key}>
                        <BiSolidUserCircle style={{height:"40px",width:"40px"}}/>
                        <h3 style={{marginLeft:"-250px"}}>{item.name}</h3>
                        <h3>+91{item.mobile}</h3>
                        <h3>{item.quantity}</h3>
                        <h3>{item.address}</h3>
                    </li>)
            })}
        </ul>
        
    </div>
  )
}

export default AgentPage;