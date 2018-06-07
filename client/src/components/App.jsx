import React from 'react';
import Title from './title/Title.jsx';
import Guests from './guests/Guests.jsx';
import Highlights from './highlights/Highlights.jsx';
import DescriptionList from './descriptions/DescriptionList.jsx';
import AmenitiesList from './amenities/AmenitiesList.jsx';
import HouseRulesList from './houseRules/HouseRulesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // How can I get all the information from data from the GET request?
    this.state = {
      propertyType: window.dummyData[0].propertyType,
      title: window.dummyData[0].title,
      descriptions: window.dummyData[0].descriptions,
      guests: window.dummyData[0].guests,
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
        <div>
          <div>
            <div className="title">
              <Title title={this.state.title} />
            </div>
          </div>
          <div>
            <div className="guests-list">
              <Guests guests={this.state.guests} />
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="highlights-list">
            <Highlights highlights={this.state.highlights} />
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
      </div>
    );
  }
}

export default App;
