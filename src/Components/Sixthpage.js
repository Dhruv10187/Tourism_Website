import photo8 from './photo8.jpeg';
import photo3 from './photo3.png';
import photo5 from './photo5.png';
import photo9 from './photo9.png';

import {Link } from 'react-router-dom';

export default function Sixthpage(){

    return(
        <div>
            <div class="page6">
            <div class="page6left">
                <img src={photo8}/>
            </div>
            <div class="page6right">
                
                <div class="page6rightD">
                <h2>Trusted Since 2001</h2>
                <p>We are Travel Agent</p>
                </div>

                <div class="page6rightA">
                    
                    <p><img src={photo3}/>Flight</p>
         
                    <p><img src={photo5}/>Cab</p>
                    <p><img src={photo9}/>Hotel</p>
                </div>
                <div class="page6rightB">
                Today, tourism is a big factor in the economic prosperity of many countries. The modern travel industry is organized to cater to every need and desire of the individual traveler revolutionized by vast improvements.                </div>
                <div class="page6rightC">
                <Link to="/Destination">  <button>Click Here</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
}