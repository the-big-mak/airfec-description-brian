import React from 'react';

const CheckinExp = props => (
  <div>
    <b>Check-in Experience</b> &bull;
    <span> </span>
    {props.checkinExp}% of recent guests gave this home a 5-star rating.
  </div>
);

export default CheckinExp;
