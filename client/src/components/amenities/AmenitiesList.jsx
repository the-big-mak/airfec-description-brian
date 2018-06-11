import React from 'react';
import Amenity from './Amenity.jsx';
import styled from 'styled-components';

const AmenitiesList = props => (
  <div>
    <div className="amenities-list">
        <b>Amenities</b>
    </div>
    <div>
      {props.amenities.map((amenity, index) => (
        <Amenity id={index} amenity={amenity} />
      ))}
    </div>
    <BottomBorderLine>
      <div>
      </div>
    </BottomBorderLine>
  </div>
);


const BottomBorderLine = styled.div`
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: .994px;
  margin: 24px 0;
  box-sizing: border-box;
  display: block;
`;

export default AmenitiesList;
