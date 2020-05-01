import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <p>app.jsx is rendering</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));