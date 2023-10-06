import { Route, Routes } from "react-router-dom";
import Carausel from "./components/Carausel";
import Contact from "./components/Contact";
import DropAndPick from "./components/DropAndPick";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Problem from "./components/Problem";
import Home from "./pages/Home";
import SignupDonor from "./components/Auth/SignupDonor";
import SignupAgent from "./components/Auth/SignupAgent";
import Register from './components/Auth/Register'
import Login from "./components/Auth/Login";
import { useUserAuth } from "./store/userAuth";
import Donor from "./pages/Donor";
import Agent from "./pages/Agent";
import { useNavigate } from "react-router-dom";

function App() {
  const {user,isAuthen,person}= useUserAuth();
  const navigate=useNavigate()
  console.log(user,isAuthen,person)
  if (isAuthen && person==='donor'){
    navigate('/donor')
  }
  if (isAuthen && person==='agent'){
    navigate('/agent')
  }
  else {
  return (
    <div className="overflow-x-hidden flex flex-col">
      {/* <Navigation /> */}
      {/* <Home /> */}
      {/* <Contact /> */}
      <Routes>
        <Route path='/donor' element={<Donor /> } />
        <Route path='/agent' element={<Agent />} />
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signupDonor' element={<SignupDonor />} />
        <Route path='/signupAgent' element={<SignupAgent />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/*" element={isAuthen && person==='agent' && <Agent />} /> */}
      </Routes>
    </div>
  
  );
  }
}

export default App;
