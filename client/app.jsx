import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData()
  };

  getData() {
    $.ajax({
      url: 'http://localhost:3002/items',
      type: 'GET',
      success: (data) => {
        this.setState({
          data: data
        })
      }
    }).then(
      () => {
        console.log(this.state.data);
      }
    )
  }

  render() {
    return (
      <div>
        <ul>

        {this.state.data.map((item, key)=> {
          return (<li key={key}>{JSON.stringify(item)}</li>)
        })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));