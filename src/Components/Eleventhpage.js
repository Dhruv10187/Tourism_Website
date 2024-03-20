import photo29 from './photo29.png';
import photo15 from './photo15.avif';
import photo16 from './photo16.webp';
import photo17 from './photo17.png';
import photo18 from './photo18.jpeg';
import photo19 from './photo19.jpeg';
import { Link } from "react-router-dom";


export default function Eightpage(){
    return(
        <div class="page11">
            <div class="page4A">
                <h2>Start Your Journey</h2>
                <p>Contact Us</p>
            </div>
            <div class="page11B">
                <img src={photo29}/>
            </div>
            <div class="page11C">
                <div class="box1">
                    <h2>Email</h2>
                    <p>travel@agency.com</p>
                </div>
                <div class="box1">
                    <h2>Call Us!</h2>
                    <p>+91 9834592100</p>
                </div>
                <div class="box1">
                    <h2>Address</h2>
                    <p>123,Main Road,New Delhi</p>
                </div>
        </div>
        <div class="page11D">
       
         <Link to="https://www.facebook.com/profile.php?id=100006621667248"><img src={photo15}/></Link>
          <Link to="https://www.instagram.com/"><img src={photo16}/></Link>
          <Link to="https://myaccount.google.com/profile?pli=1"><img src={photo17}/></Link>
          <Link to="https://www.linkedin.com/feed/"><img src={photo18}/></Link>
          <Link to="https://myaccount.google.com/profile?pli=1"><img src={photo19}/></Link>
       
           </div>

           </div>
    );
}