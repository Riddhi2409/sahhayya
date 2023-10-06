import React,{useState} from 'react'
import img4 from "../images/img4.jpg"
import {useNavigate} from 'react-router-dom'


const SignupAgent = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    city:"",
    phoneNo:0,
    vechileNo:""
  });

  function handleChange(e){
    e.preventDefault();
    setUser({...user, 
      [e.target.name]:e.target.value})
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
    <div className='parent'>
        <div className='container'>
        <div className='child'>
           <h1 style={{marginBottom:"-10px",marginTop:"1px"}}>Signup</h1>

           <input name="name" type="text" placeholder='Enter your name'
           style={styleCss} onChange={(e)=>{handleChange(e)}} />

           <input name="phoneNo" type="number" placeholder='Enter phone number'
           style={styleCss} onChange={(e)=>{handleChange(e)}}/>

           <input name="email" type="email" placeholder='Enter your email'
           style={styleCss} onChange={(e)=>{handleChange(e)}}/>

           <input name="password" type="password" placeholder='Enter password'
           style={styleCss} onChange={(e)=>{handleChange(e)}}/>

           <input name="confirmPassword" type="password" placeholder='Confirm password'
           style={styleCss} onChange={(e)=>{handleChange(e)}}/>

           <input name="city" type="text" placeholder='Enter your city'
           style={styleCss} onChange={(e)=>{handleChange(e)}}/>

           <input name="vechileNo" type="text" placeholder='Enter your vechile no.'
           style={styleCss} onChange={(e)=>{handleChange(e)}}/>

           <button style={{height:"45px",fontSize:"22px",marginTop:"13px"}}>
            Submit</button>
           <h6 style={{marginTop:"-5px"}}>OR</h6>
            <span style={{fontSize:"17px",marginTop:"-20px"}}>
            If you already have an account 
            <button onClick={()=>{navigate('/login')}}
             style={{marginLeft:"12px",backgroundColor:"white",
            borderRadius:"10px",padding:"5px",width:"100px",fontWeight:"700"}}>
            Login</button>
            </span>
        </div>
        <div className='image'>
            <img src={img4} alt="img"/>
        </div>
        </div>
    </div>
  )
}

export default SignupAgent