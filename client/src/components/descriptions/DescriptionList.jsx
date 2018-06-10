import React from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';
import MainDescription from './MainDescription.jsx';
import styled from 'styled-components';

const ReadMoreButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor:pointer;
  font-size: 16px;
  color: rgb(0, 132, 137);
  font-weight: 600;
  font-stretch: 100%
`;

const BottomBorderLine = styled.div`
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: .994px;
  margin: 24px 0;
  box-sizing: border-box;
  display: block;
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
          <ReadMoreButton onClick={() => this.handleReadMoreClicked()}>
            Read more about the space
          </ReadMoreButton>
        </div>
        <BottomBorderLine>
          <div>
          </div>
        </BottomBorderLine>
      </div>
    );
  }
}

export default DescriptionList;
