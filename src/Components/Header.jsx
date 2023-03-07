import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategoryId } from '../redux/slices/filterSlice'
 const Header = () => {
  const dispatch=useDispatch()
  return (
    <header>
    <nav className="navbar navbar-expand-lg">

   <div className="container">
    <Link to="/"><img className="navbar-brand" src="./img/newlogo.png"/></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Переключатель навигации">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
        <img src='./img/mobileimg/menu.svg'/>
        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Меню
        </a>
        <img src='./img/mobileimg/arrow.svg' alt='arrow'/>
        <ul className="dropdown-menu">
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(1))}><img src="./img/pizza1.svg"/>Мясные</span>
          </li>
          <li>
            <span  className="dropdown-item"  onClick={()=>dispatch(setCategoryId(2))}><img src="./img/pizza2.svg" />Вегетарианская</span>
          </li>
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(3))}><img src="./img/pizza3.svg"  />Острые</span>
          </li>
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(4))}><img src="./img/pizza4.svg"  />Гриль</span>
          </li>
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(5))}><img src="./img/pizza5.svg" />Закрытые</span>
          </li>
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(6))}><img src="./img/headerMenuIcon.svg"  />Гарнир</span>
          </li>
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(7))}><img src="./img/headerMenuIcon.svg"  />Десерты</span>
          </li>
          <li>
            <span  className="dropdown-item" onClick={()=>dispatch(setCategoryId(8))}><img src="./img/headerMenuIcon.svg"  />Напитки</span>
          </li>
        
        </ul>
      </li>
       
      
      <Link to='/Delivery'>
        
        <li className="nav-item">
        <img src='./img/mobileimg/order.svg' className='nav-link__img'/>
       <span className="nav-link active" aria-current="page" href="#">Доставка</span>
       <img src='./img/mobileimg/arrow.svg' alt='arrow'/> 
       
      </li>
      </Link>
      
    
    
      <li className="nav-item">
      <Link to="/Payment">
       <img src='./img/mobileimg/menu.svg' className='nav-link__img'/>
        <span className="nav-link" href="#">Оплата</span>
        <img src='./img/mobileimg/arrow.svg' alt='arrow'/>
        
        </Link>
      </li>
   
      <li className="nav-item">
        <Link to='/Cart'>
          <img src='./img/mobileimg/payment.svg'/>
          <a className="nav-link" href="#">Корзина</a>
          <img src='./img/mobileimg/arrow.svg' alt='arrow'/>

          </Link>
      </li>
    </ul>
   
     
   
  </div>
   <div className="menu-right">
      <div className="menu-right__contacts">
        <img src="./img/telephone.png"/>
        <p> 050 514 79 76</p>
      </div>
      {/* <Link to='/History'> */}
        <img src="./img/user.png" className="menu-right__user"/>
        {/* // ></Link> */}
      <Link to='/Cart'><img src="./img/cart.png" className='menu-right__cart'/></Link>

    </div>
  </div>

</nav>
    </header>

  )
}

export default Header
