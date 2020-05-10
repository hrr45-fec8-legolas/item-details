import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { price } = this.props;
    return (
      <div>
        <span className="The-Word-Price">Price: </span>
        <span className="Price">
          $
          {price}
        </span>
      </div>
    );
  }
}

Price.defaultProps = {
  price: Number,
};

Price.propTypes = {
  price: Number,
};

export default Price;
