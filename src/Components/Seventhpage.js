import photo11 from './photo11.webp';
import photo10 from './photo10.jpeg';
import photo12 from './photo12.avif';
import '../App.css';
import {Link} from 'react-router-dom';
export default function Seventhpage(){
    return(
        <div>
              <div className="page7">
            <div className="page7A">
                <h2>Pack & Go</h2>
                <p>Awesome Tours</p>
            </div>
            <div className="page7B">
                <div className="page7Bcard">
                    <img src={photo10}/>
                    <p>7 Day + 6 Night</p>
                    <h2>New York + Paris</h2>
                    <div className="page7bcardA">
                    <p>Tourism is the process of spending time away from home in pursuit of recreation, relaxation, and pleasure </p>
                    </div>
                    <h2>$600</h2>
                 <Link to="/Destination">  <button>Click Here</button></Link>
                </div>
                <div className="page7Bcard1">
                    <img src={photo12}/>
                    <p>4 Day + 3 Night</p>
                    <h2>Los Angeles</h2>
                    <div className="page7bcardA">
                    <p>Tourism is the process of spending time away from home in pursuit of recreation, relaxation, and pleasure </p>
                    </div>
                    <h2>$800</h2>
                 <Link to="/Destination">  <button>Click Here</button></Link>
                </div>
                <div className="page7Bcard">
                    <img src={photo11}/>
                    <p>5 Day + 6 Night</p>
                    <h2>Saudi + Dubai</h2>
                    <div className="page7bcardA">
                    <p>Tourism is the process of spending time away from home in pursuit of recreation, relaxation, and pleasure </p>
                </div>
                    <h2>$900</h2>
                 <Link to="/Destination">  <button>Click Here</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
}