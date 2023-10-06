import Carausel from "./components/Carausel";
import Contact from "./components/Contact";
import DropAndPick from "./components/DropAndPick";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Problem from "./components/Problem";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <Navigation />
      {/* <Home /> */}
      <Contact />
    </div>
  );
}

export default App;
