import React from 'react';
import style from '../css/producer.css';

class Producer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { producer } = this.props;
    return (
      <div className={style['Producer-Name']}>
        <p>
          by
          <em> </em>
          <a href className={style['Orange-To-Blue']}>
            {producer}
          </a>
        </p>
      </div>
    );
  }
}

Producer.defaultProps = {
  producer: String,
};

Producer.propTypes = {
  producer: String,
};


export default Producer;
