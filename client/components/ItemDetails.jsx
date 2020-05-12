import React from 'react';
import style from '../css/item-details.css';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { details } = this.props;
    return (
      <div className={style['Item-Details']}>
        <ul className={style['Item-Details-List']}>
          {details.map((item, index) => (<li index={index}>{item}</li>))}
        </ul>
      </div>
    );
  }
}

ItemDetails.defaultProps = {
  details: Array,
};

ItemDetails.propTypes = {
  details: Array,
};

export default ItemDetails;
