import React from 'react';

class NumberOfRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Number Of Ratings: {this.props.numberOfRatings}</p>
      </div>
    )
  }
}

export default NumberOfRatings;
