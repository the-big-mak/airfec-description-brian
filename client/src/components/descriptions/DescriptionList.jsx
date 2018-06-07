import React from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';

const DescriptionList = props => (
  <div>
    {props.descriptions.map((description, index) => (
      <DescriptionEntry description={description} id={index} />
    ))}
  </div>
);

export default DescriptionList;
