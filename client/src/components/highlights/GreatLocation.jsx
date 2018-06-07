import React from 'react';

const GreatLocation = props => (
  <div>
    <b>Great location</b> &bull;
    <span> </span>
    {props.greatLocation}% of recent guests gave this home a 5-star rating.
  </div>
);

export default GreatLocation;
