import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <div className="checkout__adBackground">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img19/PLCC/cart/PLCC-Core_85x93._CB450342670_.png" alt="" />
            <p><strong>Get 60 off instantly</strong> upon approval for the Amazon Store Card.</p>
            <a href="https://www.amazon.com/gp/cobrandcard/marketing.html?pr=conplcc&inc=796eef66-d3a1-40ea-b021-dae89690da8a&ts=4lxgqtgqkpas2mq1h40vyql325izi1x&plattr=nomath&ad=APSC&place=vc&imp=ecbd9992-fcc4-45ac-8eb2-452c39fa37cd">Learn more</a>
          </div>
        </div>

        <div className="checkout__basket">
          <h2 className="checkout__title">Your shopping basket</h2>
          <hr />

          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>

      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout
