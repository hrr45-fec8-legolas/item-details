import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Producer from './components/Producer';
import ItemName from './components/ItemName';
import AnsweredQuestions from './components/AnsweredQuestions';
import NumberOfRatings from './components/NumberOfRatings';
import Price from './components/Price';
import InStock from './components/InStock';
import ItemDetails from './components/ItemDetails';
import PurchaseColumn from './components/PurchaseColumn'

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
          five: -5,
        },
        price: -5,
        inStock: true,
        productInfo: ['dummy', 'dummy', 'dummy', 'dummy', 'dummy'],
      },
      postion: 5,
      starRating: 5,
    };

    this.getData = this.getData.bind(this);
    this.getStarPosition = this.getStarPosition.bind(this);
    this.getStarRating = this.getStarRating.bind(this);
    this.handleStarsMouseEnter = this.handleStarsMouseEnter.bind(this);
    this.handleStarsMouseLeave = this.handleStarsMouseLeave.bind(this);
    this.handleStarModalMouseEnter = this.handleStarModalMouseEnter.bind(this);
    this.handleStarModalMouseLeave = this.handleStarModalMouseLeave.bind(this);
  }

  componentDidMount() {
    this.getData(window.location.href.slice(26));
  }

  getData(itemId) {
    $.ajax({
      url: `http://localhost:3002/items/${itemId}`,
      type: 'GET',
      success: (data) => {
        this.setState({
          data,
        });
        this.getStarPosition();
        this.getStarRating();
      },
    });
  }

  getStarPosition() {
    let position;
    let starRating =
    (this.state.data.starPercentages.one +
    2 * this.state.data.starPercentages.two +
    3 * this.state.data.starPercentages.three +
    4 * this.state.data.starPercentages.four +
    5 * this.state.data.starPercentages.five) / this.state.data.numberOfRatings;
    if (starRating < 0.25) {
      position = 85;
    } else if (starRating >= 0.25 && starRating < 0.75) {
      position = 238;
    } else if (starRating >= 0.75 && starRating < 1.25) {
      position = 68;
    } else if (starRating >= 1.25 && starRating < 1.75) {
      position = 222;
    } else if (starRating >= 1.75 && starRating < 2.25) {
      position = 53;
    } else if (starRating >= 2.25 && starRating < 2.75) {
      position = 206;
    } else if (starRating >= 2.75 && starRating < 3.25) {
      position = 36;
    } else if (starRating >= 3.25 && starRating < 3.75) {
      position = 190;
    } else if (starRating >= 3.75 && starRating < 4.25) {
      position = 20;
    } else if (starRating >= 4.25 && starRating < 4.75) {
      position = 174;
    } else if (starRating >= 4.75 && starRating <= 5) {
      position = 4;
    }
    this.setState({
      position,
    });
  }

  getStarRating() {
    let starRating =
    (this.state.data.starPercentages.one +
    2 * this.state.data.starPercentages.two +
    3 * this.state.data.starPercentages.three +
    4 * this.state.data.starPercentages.four +
    5 * this.state.data.starPercentages.five) / this.state.data.numberOfRatings;
    starRating = starRating.toFixed(2);
    this.setState({
      starRating,
    });
  }

  handleStarsMouseEnter() {
    setTimeout(() => {
        document.getElementsByClassName('Star-Modal')[0].style.display = 'block';
      }, 250);
    }

  handleStarsMouseLeave() {
    setTimeout(() => {
        document.getElementsByClassName('Star-Modal')[0].style.display = 'none';
      }, 250000);
    }

  handleStarModalMouseEnter() {
    setTimeout(() => {
      document.getElementsByClassName('Star-Modal')[0].style.display = 'block';
    }, 25);
  }

  handleStarModalMouseLeave() {
    setTimeout(() => {
      document.getElementsByClassName('Star-Modal')[0].style.display = 'none';
    }, 200);
  }

  render() {
    return (
      <div>
        <div className="Left-Col">
          <ItemName name={this.state.data.productName} />
          <Producer producer={this.state.data.producer} />
          <NumberOfRatings starModalMouseEnter={this.handleStarModalMouseEnter} starModalMouseLeave={this.handleStarModalMouseLeave} onMouseOver={this.handleStarsMouseEnter} onMouseLeave={this.handleStarsMouseLeave} starRating={this.state.starRating} stars={this.state.data.starPercentages}
          starPosition={this.state.position} numberOfRatings={this.state.data.numberOfRatings} />
          <hr></hr>
          <Price price={this.state.data.price} />
          <ItemDetails details={this.state.data.productInfo} />
        </div>
        <PurchaseColumn price={this.state.data.price.toFixed(2)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
