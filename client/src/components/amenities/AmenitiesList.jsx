import React from 'react';
import Amenity from './Amenity.jsx';

const AmenitiesList = (props) => {
  return (
    <div>
      <div>
        <b>Amenities</b>
      </div>
      <div>
        {props.amenities.map((amenity, index) => (
          <Amenity id={index} amenity={amenity} />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesList;
