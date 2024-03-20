import photo5 from './photo5.png';
import photo7 from './photo7.png';
import photo9 from './photo9.png';
import photo38 from './photo38.jpeg';
import '../App.css';
import { Link } from "react-router-dom";
export default function Ninthpage(){
    return(
        <div className="page9">
        <div className="page9left">
            <img src={photo38}/>
        </div>
        <div className="page9right">
            <div className="page9rightA">
                <h2>New York + Paris</h2>
                <p>4 Days + 3 Nights</p>
            </div>
            <div className="page9rightB">
                <div className="page9rightB1">
                    <img src={photo7}/>
                    <p>Flight</p>
                </div>
                <div className="page9rightB1">
                    <img src={photo9}/>
                    <p>Hotel</p>
                </div>
                <div className="page9rightB1">
                    <img src={photo5}/>
                    <p>Transport</p>
                </div>
              
            </div>
            <div className="page9rightC">
            <p>Tourism is a big factor  in the economic prosperity of many countries.</p>
        </div>
        <div className="page9rightD">
            <h2>$1000</h2>
            <Link to="/Destination"><button>CLICK HERE</button></Link>
        </div>
        </div>
        </div>
            
    

    );
}