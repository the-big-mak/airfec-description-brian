import React from 'react';

const NotHelpful = props => (
  <div>
    <span className="not-helpful" onClick={props.handleNotHelpfulClicked}>
      Not Helpful
    </span>
  </div>
);

export default NotHelpful;
