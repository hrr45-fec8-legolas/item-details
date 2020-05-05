import React from 'react';

class AnsweredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Answered Questions: {this.props.answeredQuestions}</p>
      </div>
    )
  }
}

export default AnsweredQuestions;
