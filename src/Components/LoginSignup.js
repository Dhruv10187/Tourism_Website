import './Login.css';
import React, { useContext, useState } from 'react';
import usericon from './photo41.png';
import emailicon from './photo39.jpeg';
import passicon from './photo40.png';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './Context';


const LoginSignup = () => {
    const [error,setError]=useState({
        status:false,
        message:"Incorrect Password",
    })
    const navigate =useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
  });

  const {login}=useContext(AppContext);


  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (inputs.name === '') {
      alert("Please enter your name");
      return;
    }

    if (inputs.password === '') {
      alert("Please enter your password");
      return;
    }

    login(inputs,setError,final)


  }
  function final() {
    // setHome(false);
    // setNav(true);
    setTimeout(() => {
        navigate("/Home");
        window.scrollTo(0, 0);
    }, 0);
  
}

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={usericon} alt="user icon" />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={passicon} alt="password icon" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="submit-container">
        <Link to="/Signup">
          <div className="submit gray">Signup</div>
        </Link>
        
        <div className="submit" onClick={handleSubmit}>
          Login
        </div>
      </div>
      <p >{error.status?error.message:""}</p>
    </div>

  );

};

export default LoginSignup;


