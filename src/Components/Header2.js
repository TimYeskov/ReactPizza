import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "macro-css";
import { useDispatch } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";
import { openLogin } from "../redux/slices/cartSlice";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src="./img/newlogo.svg" alt="logo" className="logo" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li
                className="nav-item dropdown "
                onClick={() => handleMenuToggle()}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Меню
                </a>
                <div
                  className={`dropdown-menu  ${isMenuOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(1))}>
                      Мясные
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(2))}>
                      Вегетарианская
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(3))}>
                      Острые
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(4))}>
                      Гриль
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(5))}>
                      Закрытые
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(6))}>
                      Гарнир
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(7))}>
                      Десерты
                    </span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => window.scrollBy(0, 190)}
                  >
                    <span onClick={() => dispatch(setCategoryId(8))}>
                      Напитки
                    </span>
                  </a>
                </div>
              </li>
              <Link to="/Cart">
                <li className="nav-item">
                  <a className="nav-link ">Корзина</a>
                </li>
              </Link>
              <Link to="/Order">
                <li className="nav-item">
                  <a className=" nav-link ">Оплата</a>
                </li>
              </Link>
              <a className={`nav-item nav-link `}>
                <Search />
              </a>
            </div>
          </div>
        </nav>
        <div className="menu-right">
          <div className="menu-right__contacts">
            <img src="./img/telephone.png" className="phoneImg" />
            <p>121</p>
          </div>
          {/* <Link to='/History'> */}
          {/* <img
              src="./img/user.png"
              className="menu-right__user"
              onClick={() => dispatch(openLogin(true))}
            /> */}
          {/* // ></Link> */}
          <Link to="/Cart">
            <img src="./img/cart.png" className="menu-right__cart" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
