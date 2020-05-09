import React from 'react';
import StarModal from './StarModal';

const NumberOfRatings = (props) => (
  <div>
    <p>
      <span>
        <span onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseOver} className="Star-Rating">
          <span className="Stars-Span">
            <i style={{ backgroundPosition: `-${props.starPosition}px -368px` }} className="Stars"></i>
          </span>
          <span className="A-Letter-Space"></span>
          <span>
            <i className="Ratings-Carrot"></i>
          </span>
        </span>
        <span className="Carrot-And-Number-Of-Ratings-Space"></span>
        <a className="Number-Of-Ratings Orange-To-Blue">{props.numberOfRatings} ratings</a>
      </span>
    </p>
    <StarModal onMouseEnter={props.starModalMouseEnter} onMouseLeave={props.starModalMouseLeave} starRating={props.starRating} stars={props.stars} numberOfRatings={props.numberOfRatings} starPosition={props.starPosition}/>
  </div>
);

export default NumberOfRatings;
