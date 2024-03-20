import './App.css';
// import React from 'react';
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from './Components/Thirdpage';
import Fourthpage from './Components/Fourthpage';
import Fifthpage from './Components/Fifthpage';
import Sixthpage from './Components/Sixthpage';
import Seventhpage from './Components/Seventhpage';
import Eightpage from './Components/Eightpage';
import Ninthpage from './Components/Ninthpage';
import Tenthpage from './Components/Tenthpage';
import Eleventhpage from './Components/Eleventhpage';
import Home from './Home';
import Contact from './Components/Contact';
import Login from './Components/LoginSignup';
import { BrowserRouter, Outlet ,Routes,Route} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup';
import LoginSignup1 from './Components/LoginSignup1';
import DestinationList from './Components/Destinations';

const Layout =()=>{
  return(
    <>
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Eleventhpage/>
      </div>
    </>
  )
}
const Login1 =()=>{
  return(
    <>
      <div className="app">
        <Navbar/>
        <Outlet/>
      
      </div>
    </>
  )
}

function App() {
  
  
  return (

<div className="App">
                            
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}> 
        <Route path="/" element={<LoginSignup1/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Destination" element={<DestinationList/>}></Route>
        <Route path="/About" element={<Fourthpage/>}></Route>
        <Route path="/Discount" element={<Fifthpage/>}></Route>
        <Route path="/Blog" element={<Eightpage/>}></Route>
        

       </Route>
       <Route path="/" element={<Login1/>}> 
       <Route path="/Login" element={<LoginSignup/>}></Route>
       <Route path="/Signup" element={<LoginSignup1/>}></Route>
       <Route path="/Contact" element={<Contact/>}></Route>


       </Route>
       
      </Routes>
     </BrowserRouter>

    
  
     
    </div>
  
  );
}

export default App;
