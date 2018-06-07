import React from 'react';
import GuestInfo from './GuestInfo.jsx';

const Guests = props => (
  <div>
    <GuestInfo guestInfo={props.guests}/>
  </div>
);

export default Guests;
