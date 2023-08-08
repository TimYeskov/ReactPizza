import React, { useRef } from "react";
import hash from "object-hash";
import axios from "axios";
import "macro-css";
import "../scss/App.scss";
import { useParams } from "react-router";
import OrderBlock from "../Components/OrderBlock";
import { Link } from "react-router-dom";
import { addItemToCart, CartItemsType } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { itemsType } from "../redux/slices/pizzaSlice";
import { RootState } from "../redux/store";
const FoodBlock: React.FC = () => {
  const dispatch = useDispatch();
  const [activeSizeIndex, setActiveSizeIndex] = React.useState(0);
  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);
  const [activePriceIndex, setActivePriceindex] = React.useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const orderItem = useSelector(
    (state: RootState) => state.cartSlice.orderItem
  );

  const onChangePrice = (index: number) => {
    setActivePriceindex(index);
    setActiveSizeIndex(index);
  };

  const [pizza, setPizza] = React.useState<itemsType>();
  const [about, changeAbout] = React.useState(true);
  const [active, setActive] = React.useState(0);

  let { id } = useParams();
  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://63ca304ef36cbbdfc7539138.mockapi.io/Pizzas/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получениие товара");
      }
    };
    fetchPizza();
  }, []);
  const [hashedPizza, setHashedPizza] = React.useState("");
  React.useEffect(() => {
    setHashedPizza(hash({ id, activeSizeIndex, activeTypeIndex }));
  }, [id, activeSizeIndex, activeTypeIndex]);

  let [count, setCount] = React.useState(1);
  if (!pizza) {
    return <>загрузка</>;
  }

  let details = ["О товаре", "Параметры"];
  const onClickChange = (index: number) => {
    changeAbout(!about);
    setActive(index);
  };

  const item = {
    id: pizza.id,
    imageUrl: pizza.imageUrl,
    title: pizza.title,
    decription: pizza.decription,
    price: pizza.price[activePriceIndex] * count,
    sizes: pizza.sizes[activeSizeIndex],
    types: typeNames[activeTypeIndex],
    count: count,
    hashedPizza,
  };
  const onCountMinus = () => {
    count >= 1 && setCount(count--);
  };
  const onButtonCart = () => {
    dispatch(addItemToCart(item));
    alert("Пицца добавлена в корзину!");
  };
  console.log("orderItem", orderItem);

  return (
    <div className="container">
      <div className="item">
        <div className="item-top">
          <div className="top__image">
            <img src={pizza.imageUrl} alt="itemImg" />
          </div>
          <div className="top__right">
            <div className="product__rating">{pizza.title}</div>

            <div className="item__details">
              <div className="top__price">
                <span>Цена за уп.</span>
                <p>{pizza.price[activePriceIndex]} ₼</p>
              </div>
              <div className="top__price">
                <span>Кол-во Ккал</span>
                <p>250 Ккал.</p>
              </div>
              <div className="product__form">
                <div className="form-block">
                  {pizza.types.map((index) => (
                    <label
                      key={index}
                      onClick={() => {
                        setActiveTypeIndex(index);
                      }}
                      className={activeTypeIndex === index ? "active" : ""}
                    >
                      {typeNames[index]}
                    </label>
                  ))}
                </div>

                <div className="form-block">
                  {pizza.sizes.map((size, index) => (
                    <label
                      key={index}
                      onClick={() => {
                        onChangePrice(index);
                      }}
                      className={activeSizeIndex === index ? "active" : ""}
                    >
                      {size}
                    </label>
                  ))}
                </div>
              </div>
              <div className="top__price">
                <span className="amount">Количество</span>
                <div className="item-count">
                  <button onClick={() => onCountMinus()}>
                    <img src="../img/minus.svg" alt="plus" className="minus" />
                  </button>
                  <div>{item.count}</div>
                  <button>
                    <img
                      src="../img/plus.svg"
                      alt="minus"
                      className="plus"
                      onClick={() => setCount(count++)}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="top__total-price">
              <div className="total-price">
                <p>Итого к оплате</p>
                <span> {pizza.price[activePriceIndex] * item.count} ₼</span>
              </div>
              <div className="total-price__button">
                {/* <Link to="/Order">
                  <button
                    className="button__buy"
                    onClick={() => dispatch(addItemFromItemPage(item))}
                  >
                    Купить
                  </button>
                </Link> */}
                <button className="button__cart" onClick={() => onButtonCart()}>
                  <img src="../img/lala.svg" alt="cart" />
                  <h4> Добавить в корзину</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item-component">
          <div className="component__left">
            <ul>
              {details.map((value, index) => (
                <li
                  key={index}
                  className={active === index ? "active" : ""}
                  onClick={() => onClickChange(index)}
                >
                  {value}
                </li>
              ))}
            </ul>
            {about ? (
              <div className="component-selection">
                <h4>{pizza.title}</h4>
                <p>{pizza.decription}</p>
                {/* <p>Вес головки 500 г. +/-10%. Цена за 1 кг.</p>
                <p>Продукция компании Alpenville изготовлена преимущественно из Шарангского молока</p> */}
              </div>
            ) : (
              <div className="component-selection">
                <h4>{pizza.title}</h4>

                <p>Вес головки 500 г. +/-10%. Цена за 1 кг.</p>
                <p>
                  Продукция компании Alpenville изготовлена преимущественно из
                  Шарангского молока
                </p>
              </div>
            )}
          </div>
          <div className="component__right">
            <p>Закажите на 67 AZN и получите</p>
            <div className="sentece-block">
              <div className="sentence">
                <img src="../img/pig.svg" alt="pig" />
                <span> СКИДКА НА 3 AZN </span>
              </div>
              <div className="sentence">
                <img src="../img/truck.svg" alt="truck" />
                <span>Бесплатная доставка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderBlock />
    </div>
  );
};

export default FoodBlock;
