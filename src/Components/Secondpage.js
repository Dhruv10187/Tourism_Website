import {Link} from 'react-router-dom';
export default function Secondpage(){
    return(
        <div>
         <div className="find">
            <h2>FIND HOTELS</h2>
            <div className="findsearch">
                <div className="search">
                    <span>Where?</span>
                    <input type="text" placeholder="Location"/>
                </div>
                <div className="search">
                    <span>Check In</span>
                    <input type="date" placeholder="DD-MM-YYYY"/>
                </div>
                <div className="search">
                    <span>Check Out</span>
                    <input type="date" placeholder="DD-MM-YYYY"/>
                </div>
                <div className="search1">
                    <span>Adult</span>
                    <input type="number" placeholder="01"/>
                </div>
                <div className="search2">
                    <span>Child</span>
                    <input type="number" placeholder="00"/>
                </div>
                <div className="search3">
                <Link to="/About">  <button>Click Here</button></Link>
                </div>
            </div>
        </div>
        </div>
       
    );
}