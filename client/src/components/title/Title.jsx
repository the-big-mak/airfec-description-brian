import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  font-size: 32px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-color: #484848;
`;

const Title = props => (
    <Text>
      {props.title}
    </Text>
);

export default Title;
