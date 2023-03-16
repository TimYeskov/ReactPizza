import React from 'react'
import { useDispatch } from 'react-redux'
import "../scss/components/_cart.scss"

import { CartItemsType, minusItem,plusItem,removeItem } from '../redux/slices/cartSlice'
const CartItem:React.FC<CartItemsType> = ({imageUrl,price,title,count,sizes,types,hashedPizza}) => {
  const dispatch=useDispatch()
  let priceByCount=Math.round(count*price)

  const onCountPlus=()=>{
    dispatch(plusItem(hashedPizza))
}
const onCountMinus=()=>{
    dispatch(minusItem(hashedPizza))
    count<=1 && dispatch(removeItem(hashedPizza))

}
  return (
    <div className='cart-item'>
        <img src='../img/cancel.svg' alt='cancel' className='imgCancel' onClick={()=>dispatch(removeItem(hashedPizza))}/>
        <img src={imageUrl} alt='cartimg' className='cartImg'/>
        <div className='cartItem__right'>
        <div className='cart-item__name'>
        <p>{title}</p>
        <span> {types} тесто, {sizes} см</span>
        </div>
        <div className='top__price'>
                <div className="item-count">
                  <button onClick={onCountMinus}><img src="../img/minus.svg" alt="plus" className='minus'/></button>
                  <div> {count}шт</div>
                  <button><img src="../img/plus.svg" alt="minus"  className='plus' onClick={onCountPlus}/></button>
                </div>
            </div>
            <p className='price'>{priceByCount}  ₼</p>
            </div>
   
    </div>
  )
}

export default CartItem
