import React, { useState } from 'react'
import img3 from '../images/img3.avif'
import {useNavigate} from 'react-router-dom'
import { useUserAuth } from '../../store/userAuth';
function SignupDonor() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    city:""
  });

  function handleChange(e){
    e.preventDefault();
    setUser({...user, 
      [e.target.name]:e.target.value})
  }

  const {signupDonor} =useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    signupDonor(user)
  }
  
  const styleCss={
    border: "none",
    outline: "none",
    borderBottom: "2px solid black",
    fontSize:"15px",
    marginTop:"20px",
    width:"400px",
    boxSizing:"border-box",
    paddingBottom:"8px"
  }

  return (
    <div className='parent-box'>
        <div className='container-box'>
        <form className='child-box'>
           <h1 style={{marginBottom:"10px"}}>Signup</h1>
        
           <input name="name" type="text"
            placeholder='Enter your name'
            onChange={(e)=>{handleChange(e)}}
           style={styleCss} required/>

           <input name="email" type="email"
            placeholder='Enter your email'
            onChange={(e)=>{handleChange(e)}}
           style={styleCss} required/>

           <input name="password" type="password" 
           placeholder='Enter password'
           onChange={(e)=>{handleChange(e)}}
           style={styleCss} minLength="8" required/>

           <input name="confirmPassword" type="password" 
           placeholder='Confirm password'
           onChange={(e)=>{handleChange(e)}}
           style={styleCss} minLength="8"  required/>

           <input name="city" type="text" placeholder='Enter your city'
          onChange={(e)=>{handleChange(e)}}
           style={styleCss} required/>

           <button style={{height:"45px",fontSize:"22px",marginTop:"25px"}} onClick={handleSubmit}>
            Submit</button>

           <h6 style={{marginTop:"-5px",marginBottom:"20px"}}>OR</h6>
            <span style={{fontSize:"17px",marginTop:"-20px"}}>
            If you already have an account 
            <button onClick={()=>{navigate('/login')}}
             style={{marginLeft:"12px",backgroundColor:"white",
            borderRadius:"10px",padding:"5px",width:"100px",fontWeight:"700",border:"2px solid black"}}>
            Login</button>
            </span>

        </form>
        <div className='image'>
            <img src={img3} alt="img"/>
        </div>
        </div>
    </div>
  )
}

export default SignupDonor