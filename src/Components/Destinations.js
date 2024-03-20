// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DestinationCard from './Destination';

// const DestinationList = () => {
//   const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     axios.get('/destinations')
//       .then((response) => {
//         setDestinations(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching destination data:', error);
//       });
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   return (
//     <div>
//       <h1>Destinations</h1>
//       {destinations.map((destination) => (
//         <DestinationCard key={destination.Dest_id} destination={destination} />
//       ))}
//     </div>
//   );
// };

// export default DestinationList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '../App.css';
import DestinationCard from './Destination';
import './DestinationCard.css';
export default function Seventhpage() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destination data from the backend
    axios.get('/destinations')
      .then(response => {
        setDestinations(response.data);
      })
      .catch(error => {
        console.error('Error fetching destination data:', error);
      });
  }, []);

  return (
    <div>
      <div className="desti">
        <div className="destiA">
          <h2>Pack & Go</h2>
          <p>Awesome Tours</p>
        </div>
        <div className="destiB">
        {destinations.map((destination) => (
       <DestinationCard key={destination.Dest_id} destination={destination} />
      ))}
        </div>
      </div>
    </div>
  );
}
