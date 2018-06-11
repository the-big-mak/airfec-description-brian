import React from 'react';
import Room from './Room.jsx';
import Title from './Title.jsx';
import PropertyType from './PropertyType.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyType: '',
      title: '',
      roomList: [],
    };
  }

  componentDidMount() {
    let property = '';
    let titleName = '';
    let rooms = [];

    this.props.summary.forEach((element) => {
      if (element.propertyType) {
        property = element.propertyType;
      } else if (element.title) {
        titleName = element.title;
      } else {
        rooms.push(element);
      }
    });

    this.setState({
      propertyType: property,
      title: titleName,
      roomList: rooms,
    });
  }

  render() {
    return (
      <div>
        <div>
          <PropertyType propertyType={this.state.propertyType} />
        </div>
        <div>
          <Title title={this.state.title} />
        </div>
        <div>
          <Room roomList={this.state.roomList} />
        </div>
      </div>
    );
  }
}

export default Summary;
