import React from 'react';




class ItemName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={{fontSize: 25}}>
        {this.props.name}
      </div>
    )
  }
}

export default ItemName;
