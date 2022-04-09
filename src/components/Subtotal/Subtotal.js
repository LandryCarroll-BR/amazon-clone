import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="subtotal__freeShipping">
        <CheckCircleIcon className="subtotal__checkIcon" />
        <p><span className="subtotal__freeShippingEmphasis">Your order qualifies for free shipping.</span> Choose this option at checkout. <a className="subtotal__freeShippingEmphasis__link" href="#">see details</a></p>
      </div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong> 0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift

            </small>
          </>
        )}
        decimalScale={2}
        value="0"
        displayType={"text"}
        thousandSeparator={true}
        prefix={"S"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
