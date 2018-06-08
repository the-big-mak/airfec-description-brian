import React from 'react';
import Helpful from './Helpful.jsx';
import NotHelpful from './NotHelpful.jsx';
import styled from 'styled-components';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      helpful: false,
      notHelpful: false,
    };

    this.handleHelpfulClicked = this.handleHelpfulClicked.bind(this);
    this.handleNotHelpfulClicked = this.handleNotHelpfulClicked.bind(this);
  }

  handleHelpfulClicked() {
    this.setState({
      clicked: true,
      helpful: true,
    });
  }

  handleNotHelpfulClicked() {
    this.setState({
      clicked: true,
      notHelpful: true,
    });
  }

  // create handleFeedback for conditional rendering.

  render() {
    return (
      <div>
        <OuterWrapper>
        <HelpfulWrapper>
            <Helpful handleHelpfulClicked={this.handleHelpfulClicked}/>
              &middot;
            <NotHelpful handleNotHelpfulClicked={this.handleNotHelpfulClicked}/>
        </HelpfulWrapper>
        </OuterWrapper>
      </div>
    );
  }
}

const HelpfulWrapper = styled.div`
  display: 'flex';
  flex-direction: 'row';
`;

const OuterWrapper = styled.div`
  display: block;
`;

export default ButtonList;
