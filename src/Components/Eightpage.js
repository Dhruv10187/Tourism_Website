import photo11 from './photo11.webp';
import photo10 from './photo10.jpeg';
import photo12 from './photo12.avif';
import '../App.css';
import { Link } from "react-router-dom";


export default function Eightpage(){
    return(
        <div class="page8">
        <div class="page4A">
            <h2>Trusted Since 2001</h2>
            <p>GO EXPLOORE</p>
        </div>
        <div class="page5A">
            <div class="page8Bcard">
                <img src={photo10}/>
                 <Link to="/Destination">  <button>Click Here</button></Link>
                <h2>Tourism is a big factor </h2>
                <div class="page8bcardA">
                <p>Tourism is the process of spending time away from home in pursuit of recreation, relaxation, and pleasure </p>
                </div>

                
            </div>

    
            <div class="page8Bcard">
                <img src={photo12}/>
                 <Link to="/Destination">  <button>Click Here</button></Link>
                <h2>Tourism is a big factor</h2>
                <div class="page8bcardA">
                <p>Tourism is the process of spending time away from home in pursuit of recreation, relaxation, and pleasure </p>
                </div>

        
            </div>
    
            <div class="page8Bcard">
                <img src={photo11}/>
                 <Link to="/Destination">  <button>Click Here</button></Link>
                <h2>Tourism is a big factor</h2>
                <div class="page8bcardA">
                <p>Tourism is the process of spending time away from home in pursuit of recreation, relaxation, and pleasure </p>
                </div>

            
            </div>
            </div>
    </div>
    )
}