import React from 'react';
import StarModal from './StarModal';

class NumberOfRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { onMouseLeave } = this.props;
    const { onMouseOver } = this.props;
    const { starPosition } = this.props;
    const { numberOfRatings } = this.props;
    const { starModalMouseEnter } = this.props;
    const { starModalMouseLeave } = this.props;
    const { starRating } = this.props;
    const { stars } = this.props;
    return (
      <div>
        <p>
          <span>
            <span
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseOver}
              className="Star-Rating"
            >
              <span className="Stars-Span">
                <i
                  style={{ backgroundPosition: `-${starPosition}px -368px` }}
                  className="Stars"
                />
              </span>
              <span className="A-Letter-Space" />
              <span>
                <i className="Ratings-Carrot" />
              </span>
            </span>
            <span className="Carrot-And-Number-Of-Ratings-Space" />
            <a href className="Number-Of-Ratings Orange-To-Blue">
              {numberOfRatings}
              <span> </span>
              ratings
            </a>
          </span>
        </p>
        <StarModal
          onMouseEnter={starModalMouseEnter}
          onMouseLeave={starModalMouseLeave}
          starRating={starRating}
          stars={stars}
          numberOfRatings={numberOfRatings}
          starPosition={starPosition}
        />
      </div>
    );
  }
}

NumberOfRatings.defaultProps = {
  onMouseLeave: Function,
  onMouseOver: Function,
  starPosition: String,
  numberOfRatings: Number,
  starModalMouseEnter: Function,
  starModalMouseLeave: Function,
  starRating: Number,
  stars: Object,
};

NumberOfRatings.propTypes = {
  onMouseLeave: Function,
  onMouseOver: Function,
  starPosition: String,
  numberOfRatings: Number,
  starModalMouseEnter: Function,
  starModalMouseLeave: Function,
  starRating: Number,
  stars: Object,
};

export default NumberOfRatings;
