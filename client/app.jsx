import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Producer from './components/Producer.jsx';
import ItemName from './components/ItemName.jsx';
import AnsweredQuestions from './components/AnsweredQuestions.jsx';
import NumberOfRatings from './components/NumberOfRatings.jsx';
import Price from './components/Price.jsx';
import InStock from './components/InStock.jsx';
import ItemDetails from './components/ItemDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: -5,
        productName: 'dummy',
        producer: 'dummy',
        answeredQuestions: 'dummy',
        numberOfRatings: 'dummy',
        starPercentages: {
          one: -5,
          two: -5,
          three: -5,
          four: -5,
          five: -5
        },
        price: -5,
        inStock: true,
        productInfo: ['dummy', 'dummy', 'dummy', 'dummy', 'dummy']
      }
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(window.location.href.slice(26));
  };

  getData(itemId) {
    $.ajax({
      url: `http://localhost:3002/items/${itemId}`,
      type: 'GET',
      success: (data) => {
        this.setState({
          data: data
        })
      }
    })
  }

  render() {
    return (
      <div>

        {/* {this.state.data.map((item, key)=> {
          return (<p key={key}>{JSON.stringify(item)}</p>)
        })} */}
        <Producer producer={this.state.data.producer}/>
        <ItemName name={this.state.data.productName}/>
        <Price price={this.state.data.price}/>
        <InStock inStock={this.state.data.inStock}/>
        <AnsweredQuestions answeredQuestions={this.state.data.answeredQuestions}/>
        <NumberOfRatings numberOfRatings={this.state.data.numberOfRatings}/>
        <ItemDetails details={this.state.data.productInfo}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
