import React,{useState} from 'react'
import "./style.css"
import img5 from "../images/img5.jpg"
import {useNavigate} from 'react-router-dom';
import { useUserAuth } from '../../store/userAuth';

const Login = () => {
  const {loginDonor,loginAgent} = useUserAuth()
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
    const handleDonor = (e) => {
      e.preventDefault()
      loginDonor(user);
    }
    const handleAgent = (e) => {
      e.preventDefault()
      loginAgent(user)

    }
  return (
    <div className='parent'>
        <div className='container'>
        <form className='child'>
           <h1>Login</h1>
           
           <input name="email" onChange={(e)=>{handleChange(e)}}
           type="email" placeholder='Enter your email'
           style={styleCss} required/>

           <input  name="password" onChange={(e)=>{handleChange(e)}}
           type="password" placeholder='Enter password'
           style={styleCss} required minLength="8"/>

           <button style={{height:"45px",fontSize:"22px",marginTop:"40px"}} onClick={handleDonor}>
            Login as Donor</button>
            <button style={{height:"45px",fontSize:"22px",marginTop:"15px"}} onClick={handleAgent}>
            Login as Agent</button>

           <h6>OR</h6>
           <span style={{fontSize:"17px"}}>
            If you don't have an account 
            <button onClick={()=>{navigate('/signup')}}
            style={{marginLeft:"12px",backgroundColor:"white",
            borderRadius:"10px",padding:"5px",width:"100px",fontWeight:"700",border:"2px solid black"}}>
            Register</button>
           </span>
        </form>
        <div className='image'>
            <img src={img5} alt="img"/>
        </div>
        </div>
    </div>
  )
}

export default Login