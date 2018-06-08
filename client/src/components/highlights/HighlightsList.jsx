import React from 'react';
import HighlightEntry from './HighlightEntry.jsx';
import styled from 'styled-components';

const Container = styled.div`
  border-style: solid;
  border-color: rgb(219, 219, 219);
  margin-bottom: 24px;
  border-radius: 4px;
  border-width: .994px;
  box-sizing: border-box;
  padding: 24px;
  display: block;
  text-size-adjust: 100%;
`;

const HighlightsList = props => (
  <div>
    <Container>
      {props.highlightsList.map((highlight, index) => (
          <HighlightEntry id={index} highlight={highlight} />
        ))
      }
    </Container>
  </div>
);

export default HighlightsList;
