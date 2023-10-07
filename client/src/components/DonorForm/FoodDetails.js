import React,{useState} from 'react'
import "./FoodDetails.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { useUserAuth } from '../../store/userAuth';

const FoodDetails = () => {
  const {addFood} = useUserAuth();

    const [user,setUser] = useState({
        quantity:0,
        city:"",
        phoneNo:""
      });
    
      function handleChange(e){
        e.preventDefault();
        setUser({...user, 
          [e.target.name]:e.target.value})
      }

      function handleSubmit(e){
        e.preventDefault();
        addFood(user);

      }

      const styleCss={
        border: "none",
        outline: "none",
        borderBottom: "2px solid black",
        fontSize:"15px",
        marginTop:"20px",
        width:"400px",
        boxSizing:"border-box",
        padding:"8px",
        opacity:"0.5",
        borderRadius:"10px",
        color:"black"
      }

  return (
    <div className='parent'>

      <form className='child'>
        <h1 style={{marginBottom:"10px"}}>Details of Food</h1>

        <input name="quantity" type="number"
         placeholder='Enter food quantity in grams'
         style={styleCss}
         onChange={(e)=>{handleChange(e)}} required/>
         
         <h3>Food Type:-</h3>
         <div className="VegNonveg radios">
    
          <input type="radio" name="vegi"  value="veg" className='option'/>
          <label htmlFor="veg">Veg</label>
    
          <input type="radio" name="vegi" value="nonVeg"  className='option'/>
          <label htmlFor="nonVeg">Non Veg</label>
       </div>
       <br></br>
       <div className="rawPacket radios" style={{marginLeft:"-20px",marginBottom:"8px"}}>
    
          <input type="radio" name="rawPacket"  value="raw"  className='option'/>
          <label htmlFor="regular">Raw</label>
    
          <input type="radio" name="rawPacket" value="packet"  className='option'/>
          <label htmlFor="medium">Packet</label>
       </div>
        
        <input name="description" type='text'
         placeholder='Description of food'
         style={styleCss}
         onChange={(e)=>{handleChange(e)}}/>
        
        <input name="city" type="text" 
        placeholder='Enter address'
        style={styleCss}
        onChange={(e)=>{handleChange(e)}} required/>

        <input name="phoneNo" type="text" 
        placeholder='Enter phone number'
        style={styleCss}
        onChange={(e)=>{handleChange(e)}} required/>
        
       
        
        <button style={{height:"45px",fontSize:"22px",marginTop:"25px"}} onClick={handleSubmit}>
        Submit</button>

      </form>
        
        
    </div>
  )
}

export default FoodDetails