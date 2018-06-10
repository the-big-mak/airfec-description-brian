import React from 'react';
import axios from 'axios';
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

const TopBottomMargin = styled.div`
  margin: 24px 0;
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
      id: 99,
    };
  }

  componentDidMount() {
    axios.get('/descriptions', {
      params: {
        id: this.state.id,
      },
    }).then((response) => {
      // let propertyType = '';
      // let description = [];
      // let guests = [];
      // let amenities = [];
      // let houseRules = [];

      // response.data.forEach((el) => (
      //   if (el.amenities) {
      //     amenities.push(el.amenities);
      //   } else if (el.houseRules) {
      //     houseRules.push(el.houseRules);
      //   } else if ((el.beds || el.bathrooms || el.guests || el.beds))
      // ))
      console.log(response);
    }).catch((error) => {
      console.log('Something went wrong', error);
    });
  }

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

// componentDidMount() {
//   axios.all([
//     axios.get('/descriptions'),
//     axios.get('/amenities'),
//     axios.get('/rules'),
//   ])
//   .then(axios.spread((descriptions, amenities, rules) => {
      
    
//       this.setState({
//         amenities: amenities.data,
//         houseRules: rules.data,
//       });
//     }))
//   .catch(axios.spread((descriptionError, amenitiesError, rulesError) => {
//     if (descriptionError) {
//       throw descriptionError;
//     } else if (amenitiesError) {
//       throw amenitiesError;
//     } else if (descriptionError) {
//       throw amenitiesError;
//     }
//   }));
// }