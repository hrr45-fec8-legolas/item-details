import React from 'react';
import style from '../css/star-modal.css';

const getPercentage = (numerator, denominator) => (100 * (numerator / denominator)).toFixed(0);

class StarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { onMouseEnter } = this.props;
    const { onMouseLeave } = this.props;
    const { starPosition } = this.props;
    const { starRating } = this.props;
    const { numberOfRatings } = this.props;
    const { stars } = this.props;
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={style['Star-Modal']}
        id="Star-Modal"
      >
        <span>
          <span>
            <i style={{ backgroundPosition: `-${starPosition}px -368px` }} className={style['Stars']} />
          </span>
        </span>
        <span>  </span>
        <b className={style['Star-Rating-Out-Of']}>
          {starRating}
          <span> </span>
          out of 5
        </b>
        <br />
        <br />
        <span className={style['Star-Modal-Number-Of-Ratings']}>
          {numberOfRatings}
          <span> </span>
          customer ratings
        </span>
        <br />
        <br />
        <div className={style['Star-Bar-Container']}>
          <a href className={style['Orange-To-Blue']}>
            <span className={style['Star-Bar-Number-Of-Stars']}>5 star</span>
            <div className={style['Star-Bar']}>
              <div
                style={{ width: 2.23 * getPercentage(stars.five, numberOfRatings) }}
                className={style['Star-Progress-Bar']}
              />
            </div>
            <span className={style['Star-Percentage']}>
              {getPercentage(stars.five, numberOfRatings)}
              %
            </span>
          </a>
        </div>
        <div className={style['Star-Bar-Container']}>
          <a href className={style['Orange-To-Blue']}>
            <span className={style['Star-Bar-Number-Of-Stars']}>4 star</span>
            <div className={style['Star-Bar']}>
              <div
                style={{ width: 2.23 * getPercentage(stars.four, numberOfRatings) }}
                className={style['Star-Progress-Bar']}
              />
            </div>
            <span className={style['Star-Percentage']}>
              {getPercentage(stars.four, numberOfRatings)}
              %
            </span>
          </a>
        </div>
        <div className={style['Star-Bar-Container']}>
          <a href className={style['Orange-To-Blue']}>
            <span className={style['Star-Bar-Number-Of-Stars']}>3 star</span>
            <div className={style['Star-Bar']}>
              <div
                style={{ width: 2.23 * getPercentage(stars.three, numberOfRatings) }}
                className={style['Star-Progress-Bar']}
              />
            </div>
            <span className={style['Star-Percentage']}>
              {getPercentage(stars.three, numberOfRatings)}
              %
            </span>
          </a>
        </div>
        <div className={style['Star-Bar-Container']}>
          <a href className={style['Orange-To-Blue']}>
            <span className={style['Star-Bar-Number-Of-Stars']}>2 star</span>
            <div className={style['Star-Bar']}>
              <div
                style={{ width: 2.23 * getPercentage(stars.two, numberOfRatings) }}
                className={style['Star-Progress-Bar']}
              />
            </div>
            <span className={style['Star-Percentage']}>
              {getPercentage(stars.two, numberOfRatings)}
              %
            </span>
          </a>
        </div>
        <div className={style['Star-Bar-Container']}>
          <a href className={style['Orange-To-Blue']}>
            <span className={style['Star-Bar-Number-Of-Stars']}>1 star</span>
            <div className={style['Star-Bar']}>
              <div
                style={{ width: 2.23 * getPercentage(stars.one, numberOfRatings) }}
                className={style['Star-Progress-Bar']}
              />
            </div>
            <span className={style['Star-Percentage']}>
              {getPercentage(stars.one, numberOfRatings)}
              %
            </span>
          </a>
        </div>
        <br />
        <hr />
        <br />
        <div className={style['See-Customer-Reviews']}>
          <a href className={style['Orange-To-Blue']}>See all customer reviews</a>
        </div>
        <br />
      </div>
    );
  }
}

StarModal.defaultProps = {
  onMouseLeave: Function,
  onMouseEnter: Function,
  starPosition: String,
  numberOfRatings: Number,
  starRating: Number,
  stars: {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
  },
};

StarModal.propTypes = {
  onMouseLeave: Function,
  onMouseEnter: Function,
  starPosition: String,
  numberOfRatings: Number,
  starRating: Number,
  stars: {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
  },
};

export default StarModal;
