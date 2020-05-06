import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>
          Price:
          {this.props.price}
        </p>
      </div>
    );
  }
}

export default Price;
