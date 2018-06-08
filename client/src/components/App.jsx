import React from 'react';
import Title from './title/Title.jsx';
import Room from './guests/Room.jsx';
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

class App extends React.Component {
  constructor(props) {
    super(props);

    // How can I get all the information from data from the GET request?
    this.state = {
      propertyType: window.dummyData[0].propertyType,
      title: window.dummyData[0].title,
      descriptions: window.dummyData[0].descriptions,
      room: window.dummyData[0].room,
      highlights: window.dummyData[0].highlights,
      amenities: window.dummyData[0].amenities,
      houseRules: window.dummyData[0].houseRules,
      id: 1,
    };
  }

  // componentDidMount() {
  //   axios.get('/descriptions', {
  //     params: {
  //       id: this.state.id
  //     }
  //   }).then((response) => {
  //       console.log('I got the data!!', response.data);
  //   }).catch((error) => {
  //     console.log('Something went wrong', error);
  //   })
  // }

  render() {
    return (
      <div>
        <Wrapper>
          <div>
            <div>
              <div className="title">
                <Title title={this.state.title} />
              </div>
            </div>
            <div>
              <div className="guests-list">
                <Room room={this.state.room} />
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="highlights-list">
              <HighlightsList highlightsList={this.state.highlights} />
            </div>
            <div className="descriptions-list">
              <DescriptionList descriptions={this.state.descriptions} />
            </div>
            <div className="amenities-list">
              <AmenitiesList amenities={this.state.amenities} />
            </div>
            <div className="house-rules-list">
              <HouseRulesList houseRulesList={this.state.houseRules} />
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
