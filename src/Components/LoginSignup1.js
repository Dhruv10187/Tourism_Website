import './Login.css';
import React, { useState } from 'react';
import usericon from './photo41.png';
import emailicon from './photo39.jpeg';
import passicon from './photo40.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



    const LoginSignup1=()=>{

        const [inputs,setInputs] = useState({
            name:'',
            email:'',
            password:'',
        }) 
        const [showData,setShowData]=useState(false);
        const [error,setError]=useState({status:false,message:""});
        
        const navigate = useNavigate();
        function handleChange(event) {
            // console.log(event.target.name + " " + event.target.value)
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }));
        }   
        
      async  function handleSubmit(event) {
            event.preventDefault();
            console.log(inputs);
            if (inputs.name === '') {
                alert("PLEASE ENTER YOUR USER NAME");
            }
            if (inputs.email === '') {
                alert("PLEASE ENTER YOUR EMAIL");
            }
            if (inputs.password === '') {
                alert("PLEASE ENTER YOUR PASSWORD");
            }
            if (inputs.name !== '' && inputs.password !== '' && inputs.email !== '') {
              
                try{
                    
                   const res= await axios.post("http://localhost:8000/Signup",inputs);
                   console.log(res);
                   setShowData(true);
                }
                catch(error){
                    console.log(error);
                    setError({status:true,message:error.response.data});

                }
            
            }
        }

return(
<div className="Signupcontainer">
        <div className="container">
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                    <img src={usericon}/> 
                    <input type="text" placeholder="Name" name="name" value={inputs.name} onChange={handleChange}/>
                </div>
                   
                <div className="input">
                    <img src={emailicon}/> 
                    <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange}/>
                </div>  
                <div className="input">
                    <img src={passicon}/> 
                    <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handleChange}/>
                </div>  
            </div>
           
            
            <div className="submit-container">
            <Link to="/Login"><div className="submit gray">Login</div></Link>
            <div className="submit" onClick={handleSubmit}>Sign up</div>

            </div>

            <p>{error.status?error.message:""}</p>
        </div>
        
    <div className={showData?" data show":"data hide"}>{showData?<div className="userData"><p>userName--{inputs.name}</p> <p>Email--{inputs.email}</p> <p>password--{inputs.password}</p>
    
   <Link to="/Login"> <button onClick={()=>setShowData(false)}>OK</button></Link>
    
    </div>:""}</div>
       </div>
    );
};


export default LoginSignup1;