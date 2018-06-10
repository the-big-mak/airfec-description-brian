import React from 'react';
import HiddenRule from './HiddenRule.jsx';
import styled from 'styled-components';

class DisplayReadMoreButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReadMoreClicked: false,
    };

    this.displayHiddenRules = this.displayHiddenRules.bind(this);
  }

  handleReadMoreClicked() {
    this.setState({ isReadMoreClicked: !this.state.isReadMoreClicked });
  }

  displayHiddenRules() {
    return (
      <div>
        {this.props.hiddenRules.map((hiddenRule, index) => (
          <HiddenRule hiddenRule={hiddenRule} id={index} />
        ))}
      </div>
    );
  }

  displayNoContent() {
    return (
      <div>
      </div>
    )
  }

  render() {
    const buttonClicked = this.state.isReadMoreClicked;

    return (
      <div>
        <div>
          {buttonClicked ? (
            this.displayHiddenRules()
          ) : (
            this.displayNoContent()
          )}
        </div>
        <div>
          <ReadMoreButton onClick={() => this.handleReadMoreClicked()}>
            Read all rules
          </ReadMoreButton>
        </div>
      </div>
    );
  }
}

const ReadMoreButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor:pointer;
  font-size: 16px;
  color: rgb(0, 132, 137);
  font-weight: 600;
  font-stretch: 100%
`;

export default DisplayReadMoreButton;
