import React from 'react';
import axios from 'axios';
import Summary from './summary/Summary.jsx';
import HighlightsList from './highlights/HighlightsList.jsx';
import DescriptionList from './descriptions/DescriptionList.jsx';
import AmenitiesList from './amenities/AmenitiesList.jsx';
import HouseRulesList from './houseRules/HouseRulesList.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  text-size-adjust: 100%;
  color: rgb(72, 72, 72);
`;

const TopBottomMargin = styled.div`
  margin: 24px 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: window.dummyData[0].summary,
      descriptions: window.dummyData[0].descriptions,
      highlights: window.dummyData[0].highlights,
      amenities: window.dummyData[0].amenities,
      houseRules: window.dummyData[0].houseRules,
      id: 98,
    };
  }


  componentDidMount() {
    axios.get('/description', {
      params: {
        id: this.state.id,
      },
    })
      .then((result) => {
        const data = result.data;

        this.setState({
          summary: data[1],
          amenities: data[3],
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
                <DescriptionList descriptions={this.state.descriptions} />
              </TopBottomMargin>
            </div>
            <div className="amenities-list">
              <TopBottomMargin>
                <AmenitiesList amenities={this.state.amenities} />
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

export default App;
