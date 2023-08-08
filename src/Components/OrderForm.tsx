import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PreparedOrder } from "../redux/slices/cartSlice";
import { RootState } from "../redux/store";

const OrderForm: React.FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [number, setNUmber] = useState("");
  const [orderAdress, setOrderAdress] = useState("");
  const [error, setError] = useState("");
  const [comment, showCommnet] = React.useState("hidden");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (userName === "") {
      setError("Please enter a username.");
      return;
    }

    if (number === "") {
      setError("Please enter a number.");
      return;
    }

    if (orderAdress === "") {
      setError("Please enter a password.");
      return;
    }

    // отправить данные формы на сервер
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="form-group col-md-8">
        <label htmlFor="inputState">Район доставки</label>
        <select id="inputState" className="form-control">
          <option selected>Выбрать...</option>
          <option>Нариманов</option>
          <option>Поселок Шмаляево</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">ФИО</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Введите Ваше полное имя"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>

      <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
        Телефон
      </label>
      <div className="input-group mb-4 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text">+994</div>
        </div>
        <input
          type="text"
          className="form-control"
          id="inlineFormInputGroupUsername2"
          placeholder="Username"
          onChange={(event) => setNUmber(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Адрес доставки</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Введите адрес доставки"
          value={orderAdress}
          onChange={(event) => setOrderAdress(event.target.value)}
        />
      </div>

      <div className="form-group col-md-8">
        <label htmlFor="inputState">Способ оплаты</label>
        <select id="inputState" className="form-control">
          <option selected>Наличные...</option>
          <option>Карта</option>
        </select>
      </div>
      <div className="form-group">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="labelComment"
          onClick={() => showCommnet("")}
        >
          Оставить Комментарий
        </label>
        <textarea className={comment}></textarea>
      </div>

      <Link to="/CompletedOrder">
        <button type="submit" onClick={() => dispatch(PreparedOrder())}>
          Оформить заказ
        </button>
      </Link>
    </form>
  );
};

export default OrderForm;
