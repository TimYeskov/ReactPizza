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
import { useAppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { RootState } from '../redux/store';
const Home:React.FC = () => {
    const dispatch=useAppDispatch()
    const items=useSelector((state:RootState)=>state.pizzaSlice.items)
    const [pageCurrent,setPageCurent]=React.useState(1)
    const categoryId=useSelector((state:RootState)=>state.filterSlice.categoryId)
    const searchValue=useSelector((state:RootState)=>state.filterSlice.searchValue)


  React.useEffect(()=>{
    const getPizzas=async()=>{
      dispatch(fetchPizzas({categoryId,pageCurrent,searchValue}))
    }
    getPizzas()
   

},[categoryId,pageCurrent]
)
  return (
    <div>
      <HomeSlider/>
      <MenuSlider/>

      <div className='home-products'>
        <div className='container'>
          <div className='row'>
          <h2>Все товары</h2>
           <div className='products-wrapper'>
            {items
            .filter((obj)=>{
              if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
                return true
              }
              return false
            })
            .map((obj)=><ProductBlock {...obj}/>)}
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
