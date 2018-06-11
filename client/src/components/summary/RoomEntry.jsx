import React from 'react';

class RoomEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      room: '',
      roomInfo: 0,
      id: this.props.id,
    };
  }

  componentDidMount() {
    const room = this.props.room;

    if (this.state.id === 0) {
      this.setState({ image: '' });
      this.setState({ room: 'guests' });
      this.setState({ roomInfo: room.guests });
    } else if (this.state.id === 1) {
      this.setState({ image: '' });
      this.setState({ room: 'bedrooms' });
      this.setState({ roomInfo: room.bedrooms });
    } else if (this.state.id === 2) {
      this.setState({ type: '' });
      this.setState({ room: 'beds' });
      this.setState({ roomInfo: room.beds });
    } else if (this.state.id === 3) {
      this.setState({ type: '' });
      this.setState({ room: 'baths' });
      this.setState({ roomInfo: room.bath });
    }
  }

  render() {
    return (
      <span className={`room-id: ${this.state.id}`}>
        {this.state.roomInfo} {this.state.room}
        <span> </span>
      </span>
    );
  }
}

export default RoomEntry;
