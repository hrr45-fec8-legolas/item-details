import React from 'react';

const InStock = (props) => {
  return (
    <div>
      <p>In Stock: {props.inStock ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default InStock;
