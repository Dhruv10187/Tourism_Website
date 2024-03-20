import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";
import axios from 'axios';


const Contact = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const subjectRef= useRef(null);


  const navigate = useNavigate();




  async function handleSubmit(event) {
      event.preventDefault();

      const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;
      if (name === '') {
          alert("PLEASE ENTER YOUR FULL NAME");
          return;
      }
      if (email === '') {
          alert("PLEASE ENTER YOUR EMAIL");
          return;
      }
      // const sub='@';
      // if(!email.includes(sub)){
      //     alert("Enter valid email -- @ is missing");
      //     return;
      // }
      // const sub1='.com';
      // if(!email.includes(sub1)){
      //     alert("Enter valid email -- .com is missing");
      //     return;
      // }
      if (subject === '') {
          alert("PLEASE ENTER THE SUBJECT YOU WANT TO TALK ABOUT");
          return;
      }
      if (message === '') {
          alert("PLEASE ENTER YOUR MESSAGE");
          return;
      }
      if (name !== '' && message !== '' && subject !== '' && email !== '') {
          alert("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!!");
          try{
            const res=await axios.post("http://localhost:8000/Contact",{name,message,subject,email})
            console.log(res);
          }
          catch(error){
            console.log(error);
          }
          navigate("/Home");

          window.scrollTo(0, 0);
      }


  }
  return (
      <div className='contact-form'>
          <div className="contact-container">
              <div className="contact-details">
                  <div className="details-container">
                      <h1>Let's get in touch</h1>
                      <p>We're open for any suggestion or just to have a chat</p>
                      <div className="contact-info-container">
                          <div className="contact-info"><div className="contact-content">Address: 198 West 21th Street, Suite 721 New York NY 10016</div></div>
                          <div className="contact-info"><div className="contact-content">Phone: + 1235 2355 98</div></div>
                          <div className="contact-info"><div className="contact-content">Email: info@yoursite.com</div></div>
                      </div>
                  </div>
              </div>
              <div className="form">
                  <form className='w-80'>
                      <h1>Get in touch</h1>
                      <div className="user-info">
                          <div className="name">
                              <label htmlFor="name">FULL NAME</label>
                              <input type="text" placeholder='Name' id="name" name="name" ref={nameRef} />
                          </div>
                          <div className="mail">
                              <label htmlFor="mail">EMAIL ADDRESS</label>
                              <input type="email" placeholder='Email' ref={emailRef}  id="mail" name="email" />

                          </div>
                      </div>
                      <div className="subject">
                          <label htmlFor="subject">SUBJECT</label>
                          <input type="text" placeholder='Subject' id="subject" name="subject" ref={subjectRef}  />
                      </div>
                      <div className="message">
                          <label htmlFor="message">MESSAGE</label>
                          <input type="text" placeholder='Message' id="message" name="message" ref={messageRef} />
                      </div>

                      <button type="submit" class="btn btn-success" style={{ padding: "10px", fontSize: "2rem" }} onClick={handleSubmit}>Send Message</button>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Contact;   