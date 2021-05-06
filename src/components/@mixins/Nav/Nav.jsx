import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../../@shared/CartIcon/CartIcon";
import * as S from "./Nav.styled";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  const cartAmount = Object.values(cart).reduce(
    (acc, cur) => acc + cur.amount,
    0
  );

  return (
    <S.Nav>
      <S.NavWrapper>
        <Link to="/" className="nav-title">
          <CartIcon />
          <h1>WOOWA SHOP</h1>
        </Link>
        <S.NavMenu>
          <li>
            <Link to="/cart" className="cart-link" aria-label="cart-link">
              <span>장바구니</span>
              {cartAmount > 0 && (
                <span className="cart-amount">{cartAmount}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/order">
              <span>주문목록</span>
            </Link>
          </li>
        </S.NavMenu>
      </S.NavWrapper>
    </S.Nav>
  );
};

export default Nav;
