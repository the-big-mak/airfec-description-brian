import React from 'react';

const GuestInfo = (props) => {
  console.log(props);
  return (
    <div>
      <span className="guest-number">
        {props.guestInfo.guests}
        {' '} 
        guests
        {'  '}
      </span>
      <span className="bedrooms">
        {' '}
        {props.guestInfo.bedrooms}
        {'  '}
        bedrooms
        {'  '}
      </span>
      <span className="property-type">
        {'  '}
        {props.guestInfo.propertyType}
        {'  '}
        property type
        {'  '}
      </span>
      <span className="beds">
        {'  '}
        {props.guestInfo.beds}
        {'  '}
        beds
        {'  '}
      </span>
      <span className="bath">
        {'  '}
        {props.guestInfo.bath}
        {'  '}
        bath
        {'  '}
      </span>
    </div>
  );
};

//<div style="margin-right: 8px;"><span class="_okqgdgp"><span class="_1r3plqb" aria-hidden="true">󰄂</span></span></div>

export default GuestInfo;
