// import photo31 from './photo31.png';
// import photo32 from './photo32.png';
// import photo33 from './photo33.png';
// import photo34 from './photo34.png';
// import photo35 from './photo35.png';
// import photo36 from './photo36.png';
// import {Link} from 'react-router-dom';

// export default function Navbar(){
//     return (
     
    
//             <div className="navigation" style={{overflowX:'hidden'}}>
//                 <div className="nav1">
//                     <div className="nav1left">
//                         <span><img src={photo31}/> +123 456 789</span>
//                     <span><img src={photo32}/>   free@psdfreebies.com</span>
//                     </div>

//                     <div className="nav1right">
//                         <img src={photo33}/>
//                         <span><img src={photo34}/><Link style={{textDecoration: 'none',color:'white'}} to="/Login">  Login</Link></span>
//                         <span><img src={photo35}/><Link style={{textDecoration: 'none',color:'white'}} to="/Signup">  Sign Up</Link></span>
//                     </div>
                    
//                 </div>
//                 <div className="line"></div>
//                 <div className="nav2">
//                     <div className="nav2left">
//                         <img src={photo36}/>
//                         <p>CREATIVE TAGLINE HERE</p>
//                     </div>
//                     <div className="nav2right">
//                         <h2><Link style={{textDecoration: 'none',color:'white'}} to="/">HOME</Link></h2>
//                         <h2><Link style={{textDecoration: 'none',color:'white'}} to="/Destination">DESTINATION</Link></h2>
//                         <h2><Link style={{textDecoration: 'none',color:'white'}} to="/Discount"> DISCOUNT</Link> </h2>
//                         <h2><Link style={{textDecoration: 'none',color:'white'}} to="/About">ABOUT</Link></h2>
//                         <h2><Link style={{textDecoration: 'none',color:'white'}} to="/Blog"> BLOG</Link> </h2>
//                         <h2><Link style={{textDecoration: 'none',color:'white'}} to="/Contact">CONTACT</Link></h2>
//                     </div>
//             </div>
//             </div>

        

       
     
//     );
// }

import photo36 from "./photo36.png";
import photo31 from "./photo31.png";
import photo32 from "./photo32.png";
import photo33 from "./photo33.png";
import photo34 from "./photo34.png";
import photo35 from "./photo35.png";
import photo43 from "./photo43.webp";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const {user,logout} =useContext(AppContext);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <div className="navigation">
        <div className="nav1">
          <div className="nav1left">
            <span>
              <img src={photo31} /> +123 456 789
            </span>
            <span>
              <img src={photo32} /> free@psdfreebies.com
            </span>
          </div>

          <div className="nav1right">

            <Link to="https://mail.google.com/mail/u/0/#inbox"><img src={photo33} /></Link>
            <h6>{user===null?"":<><img src={photo34} />{user.Name}</>}</h6>
            <span>
            {user===null?<><img src={photo34} />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Login"
              >
                {" "}
                Login
              </Link></>:<p onClick={logout}><Link to="/Login" style={{ textDecoration: "none", color: "white" }}>LogOut</Link></p>}
            </span>
            
            <span>
              <img src={photo35} />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Signup"
              >
                {" "}
                Sign Up
              </Link>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="nav2">
          <div className="nav2left">
            <Link to="/"><img src={photo36} alt="" /></Link>
            <p>CREATIVE TAGLINE HERE</p>
          </div>
          <div className="nav2right">
            <h2>
              <Link style={{ textDecoration: "none", color: "white" }} to="/Home">
                HOME
              </Link>
            </h2>
            <h2>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Destination"
              >
                DESTINATION
              </Link>
            </h2>
            <h2>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Discount"
              >
                {" "}
                DISCOUNT
              </Link>{" "}
            </h2>
            <h2>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/About"
              >
                ABOUT
              </Link>
            </h2>
            <h2>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Blog"
              >
                {" "}
                BLOG
              </Link>{" "}
            </h2>
            <h2>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Contact"
              >
                CONTACT
              </Link>
            </h2>
          </div>
          <div className="hamburger">
            {screenSize.width <=450 ? (
              toggle ? (
                <p onClick={() => setToggle(!toggle)}><i class="fa-solid fa-xmark fa-2x" style={{color: '#ffffff'}}></i></p>
              ) : (
                <p onClick={() => setToggle(!toggle)}><i class="fa-solid fa-bars fa-2x" style={{color: '#ffffff'}}></i></p>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div
        id="mobile-view"
        style={toggle ? { opacity: 1, transition: "1s" } : { opacity: 0 }}
      >
        {screenSize.width <= 450 && toggle ? (
          <div className="mobile-container">
            <h2 className="mobile-link">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                HOME
              </Link>
            </h2>
            <h2 className="mobile-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Destination"
              >
                DESTINATION
              </Link>
            </h2>
            <h2 className="mobile-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Discount"
              >
                {" "}
                DISCOUNT
              </Link>{" "}
            </h2>
            <h2 className="mobile-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/About"
              >
                ABOUT
              </Link>
            </h2>
            <h2 className="mobile-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Blog"
              >
                {" "}
                BLOG
              </Link>{" "}
            </h2>
            <h2 className="mobile-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                // to="/Contact"
              >
                CONTACT
              </Link>
            </h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}