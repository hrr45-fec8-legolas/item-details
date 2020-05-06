import React from 'react';

const ItemDetails = (props) => (
  <div>
    <ul>
      {props.details.map((item, key) => (<li key={key}>{item}</li>))}
    </ul>
  </div>
);


export default ItemDetails;
