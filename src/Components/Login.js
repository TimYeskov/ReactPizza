import React from "react";
import { useAppDispatch } from "../redux/store";
import { openLogin } from "../redux/slices/cartSlice";
import "../scss/components/login.scss";
import { useDispatch } from "react-redux";
export const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="overlay"></div>
      <div className="containerr">
        <div className="container__header">
          <div>
            {/* <img src={logo} /> */}
            <img
              src="../img/cancel.svg"
              className="cancel"
              onClick={() => dispatch(openLogin(false))}
            />
          </div>

          <h2>Регистрация для личного кабинета</h2>
        </div>
        <div className="container__wrapper">
          <div className="container__login">
            <form>
              <input
                type="text"
                name="Email"
                placeholder="ilovepizza@gmail.com"
              />
              <input type="password" name="password" placeholder="пароль" />
            </form>
            {/* <div className="container__settings">
              <h4>Remember Me</h4>
              <a>Forgot Password</a>
            </div> */}
            <button className="loginBtn">Войти</button>
            <h4 className="underBtn">
              Нет аккаунта? <span>Регситрация в один клик</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
