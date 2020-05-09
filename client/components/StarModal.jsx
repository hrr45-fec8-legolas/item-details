import React from 'react';

const getPercentage = (numerator, denominator) => {
  return (100 * (numerator / denominator)).toFixed(0);
};

const StarModal = (props) => {
  return (
    <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className="Star-Modal">
      <span>
            <span className="Stars-Span">
              <i style={{ backgroundPosition: `-${props.starPosition}px -368px` }} className="Stars"></i>
            </span>
      </span>
      <span>  </span>
      <b className="Star-Rating-Out-Of">{props.starRating} out of 5</b>
      <br></br><br></br>
      <span className="Star-Modal-Number-Of-Ratings">{props.numberOfRatings} customer ratings</span>
      <br></br><br></br>
      <div className="Star-Bar-Container">
        <a className="Orange-To-Blue">
          <span className="Star-Bar-Number-Of-Stars">5 star</span>
          <div className="Star-Bar">
            <div style={{width: 2.23 * getPercentage(props.stars.five, props.numberOfRatings)}} className="Star-Progress-Bar"></div>
          </div>
          <span className="Star-Percentage">{getPercentage(props.stars.five, props.numberOfRatings)}%</span>
        </a>
      </div>
      <div className="Star-Bar-Container">
        <a className="Orange-To-Blue">
          <span className="Star-Bar-Number-Of-Stars">4 star</span>
          <div className="Star-Bar">
            <div style={{width: 2.23 * getPercentage(props.stars.four, props.numberOfRatings)}} className="Star-Progress-Bar"></div>
          </div>
          <span className="Star-Percentage">{getPercentage(props.stars.four, props.numberOfRatings)}%</span>
        </a>
      </div>
      <div className="Star-Bar-Container">
        <a className="Orange-To-Blue">
          <span className="Star-Bar-Number-Of-Stars">3 star</span>
          <div className="Star-Bar">
            <div style={{width: 2.23 * getPercentage(props.stars.three, props.numberOfRatings)}} className="Star-Progress-Bar"></div>
          </div>
          <span className="Star-Percentage">{getPercentage(props.stars.three, props.numberOfRatings)}%</span>
        </a>
      </div>
      <div className="Star-Bar-Container">
        <a className="Orange-To-Blue">
          <span className="Star-Bar-Number-Of-Stars">2 star</span>
          <div className="Star-Bar">
            <div style={{width: 2.23 * getPercentage(props.stars.two, props.numberOfRatings)}} className="Star-Progress-Bar"></div>
          </div>
          <span className="Star-Percentage">{getPercentage(props.stars.two, props.numberOfRatings)}%</span>
        </a>
      </div>
      <div className="Star-Bar-Container">
        <a className="Orange-To-Blue">
          <span className="Star-Bar-Number-Of-Stars">1 star</span>
          <div className="Star-Bar">
            <div style={{width: 2.23 * getPercentage(props.stars.one, props.numberOfRatings)}} className="Star-Progress-Bar"></div>
          </div>
          <span className="Star-Percentage">{getPercentage(props.stars.one, props.numberOfRatings)}%</span>
        </a>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="See-Customer-Reviews"><a className="Orange-To-Blue">See all customer reviews<i></i></a></div>
      <br></br>
    </div>
  );
};

export default StarModal;
