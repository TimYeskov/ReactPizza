import React from 'react'
import '../scss/App.scss'
import axios from 'axios'




// import AdvancedExample from './Untitled-1';
import PagePagination from '../Components/Pagination';
import HomeSlider from '../Components/HomeSlider';
import MenuSlider from '../Components/MenuSlider';
import ProductBlock from '../Components/ProductBlock';
import HomeVideo from '../Components/HomeVideo';
import OrderBlock from '../Components/OrderBlock';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
const Home = () => {
    const dispatch=useDispatch()
    const items=useSelector(state=>state.pizzaSlice.items)
    const [pageCurrent,setPageCurent]=React.useState(1)
    const categoryId=useSelector(state=>state.filterSlice.categoryId)


  React.useEffect(()=>{
    const getPizzas=async()=>{
      dispatch(fetchPizzas({categoryId,pageCurrent}))
    }
    getPizzas()
   

},[categoryId,pageCurrent]
)
  return (
    <div>
      <HomeSlider/>
      <MenuSlider categoryId={categoryId}/>

      <div className='home-products'>
        <div className='container'>
          <div className='row'>
          <h2>Все товары</h2>
           <div className='products-wrapper'>
            {items.map((obj)=><ProductBlock {...obj}/>)}
          </div>
          </div>
        </div>
      </div>

     <PagePagination onChangePage={(number)=>setPageCurent(number)}/>

     <HomeVideo/>

     <OrderBlock/>
    </div>
  )
}

export default Home
