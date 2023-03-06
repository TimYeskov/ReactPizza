import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const CompletedOrder = () => {
  return (
      <div className="cart cart--empty">
        <h2>Заказ Оформлен <span>😃</span></h2>
        <p>Приятного аппетита!
          
        </p>
        <img src='../../img/CompletedOrder.png' alt="Empty cart"/>
       <Link to='/'><a className="button button--black"><span>Вернуться назад</span></a></Link> 
       </div>
       
    
  )
}

export default CompletedOrder