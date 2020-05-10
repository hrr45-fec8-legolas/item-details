import React from 'react';

const PurchaseColumn = (props) => (
  <div className="Right-Col">
    <div className="Share">
      <span><a className="Orange-To-Blue">Share</a>
        <span className="A-Letter-Space"></span>
        <span className="Share-Icons">
          <i className="Share-Icon Email"></i>
          <span className="A-Letter-Space"></span>
          <i className="Share-Icon Facebook"></i>
          <span className="A-Letter-Space"></span>
          <i className="Share-Icon Twitter"></i>
          <span className="A-Letter-Space"></span>
          <i className="Share-Icon Pinterest"></i>
        </span>
      </span>
    </div>
    <div className="Checkout">
      <div className="Checkout-Price">
        <span className="Checkout-Price-Span">${props.price}</span>
      </div>
      <div className="Checkout-Button-Container">
        <button className="Checkout-Button"><i className="Shopping-Cart-Icon"></i>Add to Cart</button>
        <br></br>
      </div>
      <div className="Buy-Now-Button-Container">
        <button className="Buy-Now-Button"><i className="Play-Icon"></i>Buy Now</button>
        <br></br>
        <br></br>
      </div>
      <hr className="Checkout-hr"></hr>
      <div className="Checkout-Button-Container">
        <button className="Add-To-List-Button">Add to List</button>
        <br></br>
        <br></br>
      </div>
    </div>
  </div>
);

export default PurchaseColumn;
