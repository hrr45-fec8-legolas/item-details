import React from 'react';
import style from '../css/item-name.css';

class ItemName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { name } = this.props;
    return (
      <div className={style['ItemName']}>
        {name}
      </div>
    );
  }
}

ItemName.defaultProps = {
  name: String,
};

ItemName.propTypes = {
  name: String,
};

export default ItemName;
