import React from 'react'
import CartItem from './CartItem'
// import "../scss/components/_cart.scss"
const HistoryItem = () => {
  return (
    <div className='history_block'>
        <div className='block-left'>
            <div className='div'>
                <h4>Номер заказа</h4>
                <p className='active'>Заказ №2334678954</p>
            </div>
            <div className='div'>
                <h4>Способ оплаты:</h4>
                <p>Банковская карта</p>
            </div>
            <div className='div'>
                <h4>Дата заказа:</h4>
                <p>19.05.2020</p>
            </div>
            <div className='div'>
                <h4>Дата доставки:</h4>
                <p>23.05.2020</p>
            </div>
            <div className='div'>
                <h4>Статус заказа:</h4>
                <p className='active'>Доставлен</p>
            </div>

        </div>
        <div className='block-right'>
            <CartItem/>
            <CartItem/>
        </div>
    </div>
  )
}

export default HistoryItem
