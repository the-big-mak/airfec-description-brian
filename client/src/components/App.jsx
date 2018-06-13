import React from 'react';
import axios from 'axios';
import Summary from './summary/Summary.jsx';
import HighlightsList from './highlights/HighlightsList.jsx';
import DescriptionClicked from './descriptions/DescriptionClicked.jsx';
import AmenitiesState from './amenities/AmenitiesState.jsx';
import HouseRulesList from './houseRules/HouseRulesList.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: window.dummyData[0].summary,
      descriptions: window.dummyData[0].descriptions,
      highlights: window.dummyData[0].highlights,
      amenities: window.dummyData[0].amenities,
      houseRules: window.dummyData[0].houseRules,
      id: 43,
    };
  }

  componentDidMount() {
    axios.get('/description', {
      params: {
        id: this.state.id,
      },
    })
      .then((result) => {
        const informationData = result.data;

        this.setState({
          descriptions: informationData[0],
          summary: informationData[1],
          highlights: informationData[2],
         amenities: informationData[3],
         houseRules: informationData[4],
        });
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  }


  render() {
    return (
      <div>
        <Wrapper>
          <div>
            <div>
              <div className="summary-list">
                <Summary summary={this.state.summary} />
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="highlights-list">
              <HighlightsList highlightsList={this.state.highlights} />
            </div>
            <div className="descriptions-list">
              <TopBottomMargin>
                <DescriptionClicked descriptions={this.state.descriptions} />
              </TopBottomMargin>
            </div>
            <div className="amenities-list">
              <TopBottomMargin>
                <AmenitiesState amenities={this.state.amenities} />
              </TopBottomMargin>
            </div>
            <div className="house-rules-list">
              <TopBottomMargin>
                <HouseRulesList houseRulesList={this.state.houseRules} />
              </TopBottomMargin>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  text-size-adjust: 100%;
  color: rgb(72, 72, 72);
  margin: 10% 45% 0 10%;
`;

const TopBottomMargin = styled.div`
  margin: 24px 0;
`;

export default App;
