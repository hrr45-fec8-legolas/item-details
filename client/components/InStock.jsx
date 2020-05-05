import React from 'react';

class InStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>In Stock: {this.props.inStock ? 'Yes' : 'No'}</p>
      </div>
    )
  }
}

export default InStock;
