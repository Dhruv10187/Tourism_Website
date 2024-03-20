import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = createContext();
function Context({ children }) {
    const [user, setUser] = useState(
        
      JSON.parse(localStorage.getItem("user") || null)

    );
    const login = async (inputs, setError,final) => {
    
        try {
            // Assuming you're using axios for your API requests
            const res = await axios.post("http://localhost:8000/Login", inputs);
            console.log(res);
            // Assuming the server responds with a success status (e.g., 200)
            if (res.status === 200) {
              alert("Login successful");
              setUser(res.data.user);
              setError({
                  status:false,
                  message:"Incorrect Username and Password",
              }
              )
              final()
           
              // Redirect or perform additional actions upon successful login
            } else {
              alert("Login failed");
      
             
            }
          } catch (error) {
            console.error("Login error:", error);
            setError({
              status:true,
              message:"Incorrect Username or Password",
          }
          )
          }
    }
    const logout = async () => {
        const res = await axios.post("http://localhost:8000/logout");
        console.log(res);
        setUser(null);
      };
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    const value = {
      login,
      logout,
      user
    };
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Context;
export { AppContext };