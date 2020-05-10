import React from 'react';

class ItemName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { name } = this.props;
    return (
      <div className="ItemName">
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
