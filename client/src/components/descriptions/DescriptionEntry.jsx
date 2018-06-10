import React from 'react';

class DescriptionEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      description: '',
      id: this.props.id,
    };
  }

  componentDidMount() {
    const desc = this.props.description;

    if (this.state.id === 0) {
      this.setState({
        type: 'The Space',
        description: desc.space,
      });
    } else if (this.state.id === 1) {
      this.setState({
        type: 'Guest Access',
        description: desc.access,
      });
    } else if (this.state.id === 2) {
      this.setState({
        type: 'Guest Interactions',
        description: desc.interactions,
      });
    } else if (this.state.id === 3) {
      this.setState({
        type: 'Notes',
        description: desc.notes,
      });
    }
  }

  render() {
    return (
      <div className={`description-id: ${this.props.id}`}>
        <div className="description-type">
          <b>{this.state.type}</b>
        </div>
        <div className="description">
          {this.state.description}
        </div>
      </div>
    );
  }
}

export default DescriptionEntry;
