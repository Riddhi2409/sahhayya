import React from 'react';
import './header.css';

const Contact = () => {
  return (
    <div> 
        <div className='header'>
            <img className="headerImg" src="https://imgs.search.brave.com/0ZaLZ4U0sn4oPlcHHimKgnO3Mcr2nZAUIE7iQU67jgc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/OTc3NjY2OC9waG90/by9nZW5lcm91cy1w/ZW9wbGUtaGVscGlu/Zy10by1wb29yLXBl/b3BsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dlRmX3NN/RVluT1lXYkduT0dQ/YXFMNlRNUFNyRUN4/Uk8yVU5jUGQ4TGkt/VT0"
                alt="" />
             <span className="headerTitleLg">Contact Us</span>
        </div>
    <div className="flex justify-center mt-10 ">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="contact-form mb-4"> 
          <form> 
            <label htmlFor="name" className="block mb-2 font-semibold">Name:</label> 
            <input type="text" id="name" name="name" className="w-full p-2 mb-2 border rounded" /> 

            <label htmlFor="email" className="block mb-2 font-semibold">Email:</label> 
            <input type="email" id="email" name="email" className="w-full p-2 mb-2 border rounded" /> 

            <label htmlFor="message" className="block mb-2 font-semibold">Message:</label> 
            <textarea id="message" name="message" className="w-full p-2 mb-2 border rounded"></textarea> 

            <input type="submit" value="Send" className="bg-blue-500 text-white px-4 py-2 mt-2 cursor-pointer rounded hover:bg-blue-700" /> 
          </form> 
        </div> 
        <div className="contact-info" style={{ padding: '10px' }}> 
          <p>Email: abc@gmail.com</p> 
          <p>Phone: 555-555-5555</p> 
          <p>Address: 123 Main St, Anytown</p> 
        </div> 
      </div>
    </div>
    </div>
  );
}

export default Contact;