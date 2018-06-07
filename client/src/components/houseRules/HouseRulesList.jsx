import React from 'react';
import HouseRule from './HouseRule.jsx';

const HouseRulesList = (props) => {
  return (
    <div>
      <div>
      <b>House Rules</b>
      </div>
      <div>
        {props.houseRulesList.map((rule, index) => (
          <HouseRule key={index} rule={rule} />
      ))}
      </div>
    </div>
  );
};

export default HouseRulesList;
