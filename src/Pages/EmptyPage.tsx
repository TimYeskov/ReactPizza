import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/App.scss'

const EmptyCart:React.FC = () => {
  return (
    <div className='container'>
         <div className="cart--empty">
        <h2>Корзина пустая <span>😕</span></h2>
        <p>Вероятней всего, вы еще не заказывали пиццу.
          {/* <br>Для того, чтобы заказать пиццу, перейди на главную страницу</br> */}
        </p>
        <img src="../img/empty-cart.png" alt="Empty cart"/>
       <Link to='/'><a className="button--black"><span>Вернуться назад</span></a></Link> 
       </div>
    </div>
   
  )
}

export default EmptyCart
