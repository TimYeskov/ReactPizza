import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PreparedOrder } from "../redux/slices/cartSlice";

const OrderFormBySelf: React.FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [orderAdress, setOrderAdress] = useState("");
  const [error, setError] = useState("");

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
          onChange={(event) => setNumber(event.target.value)}
          value={number}
        />
      </div>

      <div className="form-group col-md-8">
        <label htmlFor="inputState">Когда заберете?</label>
        <select id="inputState" className="form-control">
          <option selected>В ближайшее время</option>
          <option>в течении 40 мминут</option>
          <option>Дольше 40 минут</option>
        </select>
      </div>

      {error && <div className="error">{error}</div>}

      <button type="submit" onClick={() => dispatch(PreparedOrder())}>
        Оформить заказ
      </button>
    </form>
  );
};

export default OrderFormBySelf;
