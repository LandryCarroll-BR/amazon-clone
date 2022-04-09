import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type=" " />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Hello, Guest</span>
          <span className="header__navOptionLineTwo">Sign In</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">& Orders</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__navOptionBasket">
            <ShoppingBasketIcon />
            <span className="header__navOptionLineTwo header__navOptionBasketCount">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
