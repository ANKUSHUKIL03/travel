//import logo from './logo.svg';
import './App.css';
import Foot from './components/inc/Foot';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
    <Routes>
      
      <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
    </Routes>  
    <Foot/>
    </Router>
    

    </>
  );
}

export default App;
