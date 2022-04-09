import React from 'react';
import './Product.css'

function Product({ id, title, image, price, rating }) {

  const renderStarRating = (rating) => {
    const arr = [];
    for (let i = Math.round(rating); i > 0; i--) {
      arr.push("⭐");
    }
    return arr.map(star => <p className="product__star">{star}</p>);
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {renderStarRating(rating)}
        </div>
      </div>
      <img src={image} />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product;
