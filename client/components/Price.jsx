import React from 'react';
import style from '../css/price.css';

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
        <span className={style['The-Word-Price']}>Price: </span>
        <span className={style['Price']}>
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
