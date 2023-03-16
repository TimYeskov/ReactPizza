import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'
import EmptyCart from './EmptyPage'
import { makeOrderFromCart } from '../redux/slices/cartSlice'
import Range from '../Components/Range'
import { RootState } from '../redux/store'

const Cart:React.FC = () => {
  const dispatch=useDispatch()
  const cartItems=useSelector((state:RootState)=>state.cartSlice.cartItems)
  const totalPrice=useSelector((state:RootState)=>state.cartSlice.totalPrice)
  const EndirimPrice=totalPrice-3
  if(cartItems.length>0){
  return (
    <div className='container'>
     
        <div className='cart'>
        <h1>Корзина</h1>
      <div className='cart-wrapper'>

        <div className='cart__left'>

        <div className='cart-item__block'>
          {cartItems.map(obj=>
          <CartItem {...obj}/>
          )}
        </div>
        
        <div className='component__right'>
            <p>Закажите на 67 AZN и получите</p>
            <div className='sentece-block'>
            <div className='sentence'>
                <img src='../img/pig.svg' alt='pig'/>
                <span>Скидка в 3 маната</span>
                
            </div>
            <div className='sentence'>
                <img src='../img/truck.svg' alt='truck'/>
                <span>Бесплатная доставка</span>
            </div>

            {/* <label for="customRange2" class="form-label">Example range</label>
            <input type="" disabled={true} class="form-range" min="1" max="10" id="customRange2"/> */}
            <Range/>
            </div>
        </div>
        
        </div>
        <div className='cart__total'>
            <h2>Заказ №47593</h2>
            <div className='total__price'>
                <p>Товаров в корзине</p>
                <h3 className='price'>{totalPrice}  ₼ </h3>
            </div>
            {totalPrice>67 && 
            <div className='total__price'>
                <p>Акция</p>
                <h3 className='promo-price'>- 3   ₼ </h3>
            </div>}
            <div className='final__price'>
                <p>Итого к оплате</p>
                <h2>{totalPrice<67 ? totalPrice  : EndirimPrice} ₼</h2>
            </div>
            <Link to="/Order"><button onClick={()=>dispatch(makeOrderFromCart(true))}>Оформить заказ</button></Link>
        </div>
      </div>
      </div>
    </div>
  )}
  else{
    return <EmptyCart/>
  }
  
}

export default Cart
