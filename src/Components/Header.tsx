import React, { useState } from "react";
import "macro-css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryId } from "../redux/slices/filterSlice";
import { openLogin } from "../redux/slices/cartSlice";
import Search from "./Search";
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <img className="navbar-brand" src="./img/newlogo.svg" />
        </Link>

        <div className="container__inner" id="navbarNavAltMarkup">
          <ul className="inner__nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => handleMenuToggle()}
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
                    <img src="./img/pizza1.svg" />
                    Мясные
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span
                    className="dropdown-item"
                    onClick={() => dispatch(setCategoryId(2))}
                  >
                    <img src="./img/pizza2.svg" />
                    Вегетарианская
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span onClick={() => dispatch(setCategoryId(3))}>
                    <img src="./img/pizza3.svg" />
                    Острые
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span onClick={() => dispatch(setCategoryId(4))}>
                    <img src="./img/pizza4.svg" />
                    Гриль
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span onClick={() => dispatch(setCategoryId(5))}>
                    <img src="./img/pizza5.svg" />
                    Закрытые
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span onClick={() => dispatch(setCategoryId(6))}>
                    <img src="./img/headerMenuIcon.svg" />
                    Гарнир
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span onClick={() => dispatch(setCategoryId(7))}>
                    <img src="./img/headerMenuIcon.svg" />
                    Десерты
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => window.scrollBy(0, 190)}
                >
                  <span onClick={() => dispatch(setCategoryId(8))}>
                    <img src="./img/headerMenuIcon.svg" />
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
          </ul>
          <a className="dropdown-item ">
            {/* <img src='./img/mobileimg/order.svg' className='nav-link__img img__opacity'/> */}
            {/* <span className="nav-link disabled span__disabled" aria-current="page">Доставка</span> */}
            <Search />
            {/* <img src='./img/mobileimg/arrow.svg ' alt='arrow' className='img__opacity' />
             */}
          </a>
        </div>
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
      </nav>
    </header>
  );
};

export default Header;
