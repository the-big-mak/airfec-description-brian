import React from 'react';
import Highlights from './Highlights.jsx';

const HighlightsList = props => (
  <div>
    {props.highlightsList.map((highlights, index) => {
        <Highlights key={index} highlights={highlights} />
        console.log(highlights.sparklingClean);
      })
    }
  </div>
);

export default HighlightsList;
