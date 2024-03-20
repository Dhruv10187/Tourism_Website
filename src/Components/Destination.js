import React from 'react';
import './DestinationCard.css'; // Import a CSS file for styling (create this file with your desired styles)

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card" key={destination.Dest_id}>
      {/* Assuming the destination object has fields like duration, name, description, price, and image */}
      <div className="img-container-d">
      <img className="destination-image" src={destination.image} alt={destination.name} />
      </div>
      <div className="destination-details">
        <p className="duration">{`${destination.duration} + ${destination.name}`}</p>
        <h2 className="destination-name">{destination.name}</h2>
        <div className="description">
          <p>{destination.description}</p>
        </div>
        <h2 className="price">{`$${destination.price}`}</h2>
        <button className="action-button">Click Here</button>
      </div>
    </div>
  );
};

export default DestinationCard;
