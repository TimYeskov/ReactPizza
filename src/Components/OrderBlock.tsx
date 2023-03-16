import React from 'react'

const OrderBlock:React.FC= () => {
  return (
    <div className='container'>
        <div className='row'>
          <div className='home-order__block'>
            <h2>Бесплатная доставка по Москве и Области от 2999 RUB!</h2>
            <button>Оформить</button>
            <img src="./img/car.png" alt="car" />
          </div>
        </div>
      </div>
  )
}

export default OrderBlock
