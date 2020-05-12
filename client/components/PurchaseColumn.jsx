import React from 'react';
import style from '../css/purchase-column.css'

class PurchaseColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { price } = this.props;
    return (
      <div className={style['Right-Col']}>
        <div className={style['Share']}>
          <span>
            <a href className={style['Orange-To-Blue']}>Share</a>
            <span className={style['A-Letter-Space']} />
            <span className={style['Share-Icons']}>
              <i className={`${style['Share-Icon']} ${style['Email']}`} />
              <span className={style['A-Letter-Space']} />
              <i className={`${style['Share-Icon']} ${style['Facebook']}`} />
              <span className={style['A-Letter-Space']} />
              <i className={`${style['Share-Icon']} ${style['Twitter']}`} />
              <span className={style['A-Letter-Space']} />
              <i className={`${style['Share-Icon']} ${style['Pinterest']}`} />
            </span>
          </span>
        </div>
        <div className={style['Checkout']}>
          <div className={style['Checkout-Price']}>
            <span className={style['Checkout-Price-Span']}>
              $
              {price}
            </span>
          </div>
          <div className={style['Checkout-Button-Container']}>
            <button type="submit" className={style['Checkout-Button']}>
              <i className={style['Shopping-Cart-Icon']} />
              Add to Cart
            </button>
            <br />
          </div>
          <div className={style['Buy-Now-Button-Container']}>
            <button type="submit" className={style['Buy-Now-Button']}>
              <i className={style['Play-Icon']} />
              Buy Now
            </button>
            <br />
            <br />
          </div>
          <hr className={style['Checkout-hr']} />
          <div className={style['Checkout-Button-Container']}>
            <button type="submit" className={style['Add-To-List-Button']}>
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
