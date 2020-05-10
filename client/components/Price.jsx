import React from 'react';

const Price = (props) => (
  <div>
    <span className="The-Word-Price">Price: </span>
    <span className="Price">${props.price}</span>
  </div>
);

export default Price;
