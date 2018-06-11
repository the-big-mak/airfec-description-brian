import React from 'react';
import styled from 'styled-components';
import Helpful from './buttonList/ButtonList.jsx';

class HighlightEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      desc: '',
      highlight: '',
      text: '',
    };
  }

  componentDidMount() {
    const highlights = this.props.highlight;

    if (this.state.id === 0) {
      this.setState({ desc: 'Sparkling Clean' });
      this.setState({ highlight: highlights.sparklingClean });
      this.setState({ text: ' recent guests have said that this home was sparkling clean.' });
    } else if (this.state.id === 1) {
      this.setState({ desc: 'Check-in Experience' });
      this.setState({ highlight: highlights.checkinExp });
      this.setState({ text: '% of guests gave this home\'s check-in process a 5-star rating' });
    } else if (this.state.id === 2) {
      this.setState({ desc: 'Great Location' });
      this.setState({ highlight: highlights.greatLocation });
      this.setState({ text: '% of recent guests gave this home’s location a 5-star rating.' });
    }
  }

  render() {
    return (
      <div>
        <OuterWrapper>
          <div className={`highlight-id: ${this.state.id}`}>
            <InnerWrapper>
              <span><b>{this.state.desc}</b></span> &middot; {' '}
              <span>{this.state.highlight}</span>
              <span>{this.state.text}</span>
              <Helpful />
            </InnerWrapper>
          </div>
        </OuterWrapper>
      </div>
    );
  }
}

const OuterWrapper = styled.div`
  margin-bottom: 12px;
`;

const InnerWrapper = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  letter-spacing: normal;
  line-height: 22px;
  text-size-adjust: 100%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;

export default HighlightEntry;
