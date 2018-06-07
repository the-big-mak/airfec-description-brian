import React from 'react';
import SparklingClean from './SparklingClean.jsx';
import CheckinExp from './CheckinExp.jsx';
import GreatLocation from './GreatLocation.jsx';

const Highlights = (props) => {
  return (
  <div className="home-highlights">
    <div>
      Home Highlights
    </div>
    <div>
      <SparklingClean sparklingClean={props.highlights.sparklingClean}/>
    </div>
    <div>
      <CheckinExp checkinExp={props.highlights.checkinExp}/>
    </div>
    <div>
      <GreatLocation greatLocation={props.highlights.greatLocation}/>
    </div>
  </div>
  );
};

export default Highlights;
