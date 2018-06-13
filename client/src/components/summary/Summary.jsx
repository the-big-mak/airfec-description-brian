import React from 'react';
import Room from './Room.jsx';
import Title from './Title.jsx';
import PropertyType from './PropertyType.jsx';

const Summary = (props) => {

  const value = Object.values(props.summary[0]);
  return (
    <div>
      <div>
        <PropertyType propertyType={value[0]} />
      </div>
      <div>
        <Title title={value[1]} />
      </div>
      <div>
        <Room roomList={value.slice(2)} />
      </div>
    </div>
  );
};

export default Summary;
