import React from 'react';
import HelpfulImage from './HelpfulImage.jsx';
import styled from 'styled-components';

const HelpfulButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor:pointer;
  font-size: 16px;
  color: rgb(0, 132, 137);
  font-weight: 600;
  font-stretch: 100%
`;

const Helpful = props => (
  <HelpfulButton>
    <span className="helpful" onClick={props.handleHelpfulClicked}>
      Helpful
    </span>
    <span>
      <HelpfulImage />
    </span>
  </HelpfulButton>
);

export default Helpful;
