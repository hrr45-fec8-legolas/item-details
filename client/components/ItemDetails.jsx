import React from 'react';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.details.map((item, key) => {
            return (<li key={key}>{item}</li>)
          })}
        </ul>
      </div>
    )
  }
}

export default ItemDetails;
