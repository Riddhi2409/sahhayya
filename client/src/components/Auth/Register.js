import React, { useState } from 'react'
import "./style.css"
import img2 from '../images/img2.jpg'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

  return (
    <div className='parent-box'>
        <div className='container-box'>
        <div className='child-box'>
            <h1>Sign up as a</h1>
            <button onClick={()=>{navigate('/signupDonor')}}>Donor</button>
            <button onClick={()=>{navigate('/signupAgent')}}>Agent</button>
            <h6>OR</h6>
            <span style={{fontSize:"17px"}}>
            If you already have an account 
            <button onClick={()=>{navigate('/login')}}
             style={{marginLeft:"12px",backgroundColor:"white",
            borderRadius:"10px",padding:"5px",width:"100px",fontWeight:"700",border:"2px solid black"}}>
            Login</button>
            </span>
        </div>
        <div className='image'>
            <img src={img2} alt="img"/>
        </div>
        </div>
    </div>
  )
}

export default Register