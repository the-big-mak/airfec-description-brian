import React from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';
import MainDescription from './MainDescription.jsx';
import styled from 'styled-components';

// change into class so you can control button click on list view to show more of the content as conditional rendering.

const Test = styled.button`
  background-color: Transparent;
  border: none;
  cursor:pointer;
  font-size: 16px;
  color: rgb(0, 132, 137);
  font-weight: 600;
  font-stretch: 100%
`;

class DescriptionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReadMoreClicked: false,
    };

    this.mainDescription = this.mainDescription.bind(this);
    this.remainingMapped = this.remainingMapped.bind(this);
    this.handleNoContent = this.handleNoContent.bind(this);
  }

  mainDescription() {
    const main = this.props.descriptions.slice(0, 1);

    return (
      <div>
        <MainDescription main={main} />
      </div>
    );
  }

  remainingMapped() {
    const remaining = this.props.descriptions.slice(1);

    return (
      <div>
        {remaining.map((description, index) => (
          <DescriptionEntry description={description} id={index} />
        ))}
      </div>
    );
  }

  handleReadMoreClicked() {
    this.setState({ isReadMoreClicked: !this.state.isReadMoreClicked });
  }

  handleNoContent() {
    return (
      <div>
        <span> </span>
      </div>
    )
  }

  render() {
    const isReadMoreClicked = this.state.isReadMoreClicked;

    return (
      <div>
        <div>
          {this.mainDescription()}
        </div>
        <div>
          { isReadMoreClicked ? (
            this.remainingMapped()
           ) : (
            this.handleNoContent()
           )}
        </div>
        <div>
          <Test onClick={() => this.handleReadMoreClicked()}>
            Read more about the space
          </Test>
        </div>
      </div>
    );
  }
}

export default DescriptionList;
