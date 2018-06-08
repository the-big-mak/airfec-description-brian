import React from 'react';
import HelpfulButton from './HelpfulButton.jsx';
import styled from 'styled-components';

const InlineBlock = styled.div`
  display: inline-block;
`;

const Helpful = props => (
  <InlineBlock>
    <div>
      <span className="helpful" onClick={props.handleHelpfulClicked}>
        Helpful <HelpfulButton />
      </span>
    </div>
  </InlineBlock>
);

export default Helpful;
