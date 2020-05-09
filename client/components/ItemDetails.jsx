import React from 'react';

const ItemDetails = (props) => (
  <div className="Item-Details">
    <ul className="Item-Details-List">
      {props.details.map((item, key) => (<li key={key}>{item}</li>))}
    </ul>
  </div>
);


export default ItemDetails;
