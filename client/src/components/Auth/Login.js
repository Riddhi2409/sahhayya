import React,{useState} from 'react'
import "./style.css"
import img5 from "../images/img5.jpg"
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
      email:"",
      password:""
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
           <h1>Login</h1>
           
           <input name="email" onChange={(e)=>{handleChange(e)}}
           type="email" placeholder='Enter your email'
           style={styleCss} />

           <input  name="password" onChange={(e)=>{handleChange(e)}}
           type="password" placeholder='Enter password'
           style={styleCss} />

           <button style={{height:"45px",fontSize:"22px",marginTop:"25px"}}>
            Log in</button>

           <h6>OR</h6>
           <span style={{fontSize:"17px"}}>
            If you don't have an account 
            <button onClick={()=>{navigate('/signup')}}
            style={{marginLeft:"12px",backgroundColor:"white",
            borderRadius:"10px",padding:"5px",width:"100px",fontWeight:"700"}}>
            Register</button>
           </span>
        </div>
        <div className='image'>
            <img src={img5} alt="img"/>
        </div>
        </div>
    </div>
  )
}

export default Login