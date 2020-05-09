import React from 'react';

const Producer = (props) => (
  <div className="Producer-Name">
    <p>
      by
      <em> </em>
      <a className="Orange-To-Blue">
        {props.producer}
      </a>
    </p>
  </div>
);

export default Producer;
