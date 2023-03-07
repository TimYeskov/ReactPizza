import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import hash from 'object-hash'

import { addItemToCart} from '../redux/slices/cartSlice'
import FoodBlock from '../Pages/FoodBlock'

const ProductBlock = ({id,imageUrl,title,decription,types,sizes,price,category,count}) => {
  const dispatch=useDispatch()
  //стейт для типа пиццы данной карточки
  const [isReady,setIsReady]=React.useState(false)
    
  const [activeSizeIndex,setActiveSizeIndex]=React.useState(0)
  const [activeTypeIndex,setActiveTypeIndex]=React.useState(0)
  const[activePriceIndex,setActivePriceindex]=React.useState(0)

  const  typeNames=['тонкое','традиционное']

  const onChangePrice=(index)=>{
  setActivePriceindex(index)
    setActiveSizeIndex(index)
  }

  const [hashedPizza, setHashedPizza] = React.useState('');
	React.useEffect(() => {

		setHashedPizza(hash({ id, activeSizeIndex, activeTypeIndex }))

	}, [id, activeSizeIndex, activeTypeIndex])
   const item={
    id,
    imageUrl,
    title,
    decription,
    price:price[activePriceIndex],
    sizes:sizes[activeSizeIndex],
    types:typeNames[activeTypeIndex],
    count:1,
    hashedPizza
  }

  const onAddToCart=()=>{
    
    dispatch(addItemToCart(item))
    setIsReady(!isReady)
  }
  return (
    <div className='product-block'>
    <div className='img'>
      <img src={imageUrl} alt="ProductImg"/>
    </div>

    <Link to={`/FoodBlock/${id}`}><h3>{title}</h3></Link> 
    <p className='p-description'>{decription}</p>

    <div className='product__form'>
      <div className='form-block'>
        {types.map((index)=>(
          <label
          key={index}
          onClick={()=>{setActiveTypeIndex(index)}}
          className={activeTypeIndex===index ? 'active' : ""}>{typeNames[index]}</label>
        ))}
      </div>

      <div className='form-block'>
      {sizes.map((size,index)=>(
          <label
          key={index}
          onClick={()=>{onChangePrice(index)}}
          className={activeSizeIndex===index ? 'active' : ""}>{size}</label>
        ))}
       </div>
    
    </div>


    <div className='product__rating'>
      <img src='./img/star.svg'/>
      <img src='./img/star.svg'/>
      <img src='./img/star.svg'/>
      <img src='./img/emptystar.svg'/>
    </div>
    <div className='product__price'>
      <p >{price[activePriceIndex]}  ₼/кг</p>
      <span>За 500гр.</span>
    </div>
    <div className='product__button'>
       { isReady ? 
       <img src='./img/done.svg' onClick={()=>{  setIsReady(!isReady)}}/>
       :
      <button onClick={()=>{
        onAddToCart()
      }}>В корзину</button>}
    </div>
  </div>
  )
}

export default ProductBlock
