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

function App() {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <Navigation />
      {/* <Home /> */}
      {/* <Contact /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signupDonor' element={<SignupDonor />} />
        <Route path='/signupAgent' element={<SignupAgent />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
