import React from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';
// import Descriptions from './Descriptions.jsx';
// import Space from './Space.jsx';
// import Access from './Access.jsx';
// import Interactions from './Interactions.jsx';
// import Notes from './Notes.jsx';

const DescriptionList = props => (
  <div>
    {props.descriptions.map((description, index) => (
      <DescriptionEntry description={description} id={index} key={index} />
    ))}
  </div>
);

export default DescriptionList;


/* <div className="all-descriptions">
<div className="description">
  <Descriptions descriptions={props.descriptions.descriptions}/>
</div>
<div>
  <Space space={props.descriptions.space}/>
</div>
<div>
  <Access access={props.descriptions.access}/>
</div>
<div>
  <Interactions interactions={props.descriptions.interactions}/>
</div>
<div>
  <Notes notes={props.descriptions.notes}/>
</div>
</div> */
