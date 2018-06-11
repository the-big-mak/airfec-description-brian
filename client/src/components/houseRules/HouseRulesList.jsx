import React from 'react';
import DisplayedRules from './DisplayedRules.jsx';
import DisplayReadMoreButton from './DisplayReadMoreButton.jsx';
import styled from 'styled-components';

class HouseRulesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedRules: [],
      hiddenRules: [],
    };

    this.handleNoContent = this.handleNoContent.bind(this);
  }

  componentDidMount() {
    let mappedDisplayedRules = [];
    let mappedHiddenRules = [];

    this.props.houseRulesList.forEach((element, index) => {
      if (index < 6) {
        mappedDisplayedRules.push(element);
      } else {
        mappedHiddenRules.push(element);
      }
    });

    this.setState({ displayedRules: mappedDisplayedRules });
    this.setState({ hiddenRules: mappedHiddenRules });
  }

  handleNoContent() {
    return (
      <div>
      </div>
    )
  }

  render() {
    const hiddenRulesLength = this.state.hiddenRules.length;
    return (
      <div>
        <div>
          <div>
            <b>House Rules</b>
          </div>
          <div>
            {this.state.displayedRules.map((displayedRules, index) => (
              <DisplayedRules id={index} displayedRules={displayedRules} />
            ))}
          </div>
          <div>
            {hiddenRulesLength > 0 ? (
              <DisplayReadMoreButton hiddenRules={this.state.hiddenRules}/>
            ) : (
              this.handleNoContent()
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HouseRulesList;
