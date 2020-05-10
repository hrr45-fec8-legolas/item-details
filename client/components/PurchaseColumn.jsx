import React from 'react';

class PurchaseColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { price } = this.props;
    return (
      <div className="Right-Col">
        <div className="Share">
          <span>
            <a href className="Orange-To-Blue">Share</a>
            <span className="A-Letter-Space" />
            <span className="Share-Icons">
              <i className="Share-Icon Email" />
              <span className="A-Letter-Space" />
              <i className="Share-Icon Facebook" />
              <span className="A-Letter-Space" />
              <i className="Share-Icon Twitter" />
              <span className="A-Letter-Space" />
              <i className="Share-Icon Pinterest" />
            </span>
          </span>
        </div>
        <div className="Checkout">
          <div className="Checkout-Price">
            <span className="Checkout-Price-Span">
              $
              {price}
            </span>
          </div>
          <div className="Checkout-Button-Container">
            <button type="submit" className="Checkout-Button">
              <i className="Shopping-Cart-Icon" />
              Add to Cart
            </button>
            <br />
          </div>
          <div className="Buy-Now-Button-Container">
            <button type="submit" className="Buy-Now-Button">
              <i className="Play-Icon" />
              Buy Now
            </button>
            <br />
            <br />
          </div>
          <hr className="Checkout-hr" />
          <div className="Checkout-Button-Container">
            <button type="submit" className="Add-To-List-Button">
              Add to List
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

PurchaseColumn.defaultProps = {
  price: Number,
};

PurchaseColumn.propTypes = {
  price: Number,
};

export default PurchaseColumn;
