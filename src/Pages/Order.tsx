import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import OrderForm from "../Components/OrderForm";
import OrderFormBySelf from "../Components/OrderFormBySelf";
import { RootState } from "../redux/store";
import EmptyPage from "./EmptyPage";
const Order: React.FC = () => {
  const { cartItems, orderItem } = useSelector(
    (state: RootState) => state.cartSlice
  );

  const [active, setActive] = React.useState(0);
  const totalPrice = useSelector(
    (state: RootState) => state.cartSlice.totalPrice
  );
  const endirimPrice = totalPrice - 3;
  const orderDetails = ["Доставка", "Самовывоз(-20%)"];
  const [orderDetail, changeOrderDetail] = React.useState(true);

  const onClickChange = (index: number) => {
    changeOrderDetail(!orderDetail);
    setActive(index);
  };

  if (orderItem.length <= 0) {
    return <EmptyPage />;
  } else
    return (
      <div className="container">
        <div className="order">
          <div className="order__block">
            <div className="order-left">
              <div className="order-list">
                <h1>Оформление заказа</h1>
                <h2>Вы заказали</h2>
                <div className="order-item__block">
                  {cartItems.map((obj) => (
                    <CartItem {...obj} />
                  ))}
                </div>
              </div>
              <div className="order-type">
                <div className="order-type__buttons">
                  {orderDetails.map((value, index) => (
                    <button
                      className={
                        active === index ? "button button--active" : "button"
                      }
                      onClick={() => onClickChange(index)}
                    >
                      {value}
                    </button>
                  ))}
                  {/* <button className="button button--active">Доставка</button>
                  <button className="button">Самовывоз (- 20%)</button> */}
                </div>

                {orderDetail ? (
                  <div className="order-type__summary">
                    <div className="first">
                      <h3>Итого</h3>
                      <h3>Доставка</h3>
                    </div>
                    <div className="second">
                      <h3>
                        {totalPrice} ₼{totalPrice > 67 && <span>(-3 )</span>}
                      </h3>
                      <h3>2 ₼</h3>
                    </div>
                    <div className="third">
                      <h2>Итого к оплате</h2>
                      <h2>
                        {totalPrice < 67 ? totalPrice + 2 : endirimPrice + 2} ₼
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div className="order-type__summary">
                    <div className="first">
                      <h3>Итого</h3>
                      <h3>Самовывоз</h3>
                    </div>
                    <div className="second">
                      <h3>
                        {totalPrice} ₼{totalPrice > 67 && <span>(-3 )</span>}
                      </h3>
                      <h3>-2 ₼</h3>
                    </div>
                    <div className="third">
                      <h2>Итого к оплате</h2>
                      <h2>
                        {totalPrice < 67 ? totalPrice - 2 : endirimPrice - 2} ₼
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="order-right">
              {orderDetail ? <OrderForm /> : <OrderFormBySelf />}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Order;
