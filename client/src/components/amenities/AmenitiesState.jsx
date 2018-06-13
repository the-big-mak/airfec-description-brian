import React from 'react';
import AmenitiesList from './AmenitiesList.jsx';
import styled from 'styled-components';

class AmenitiesState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAmenities: false,
    };

    this.handleShowAmenities = this.handleShowAmenities.bind(this);
  }

  handleShowAmenities() {
    this.setState({
      showAmenities: !this.state.showAmenities,
    });
  }

  render() {
    return (
      <div>
        <AmenitiesList
        amenities={this.props.amenities}
        handleShowAmenities={this.handleShowAmenities}
        showAmenities={this.state.showAmenities}
        />
      </div>
    );
  }
}

export default AmenitiesState;
