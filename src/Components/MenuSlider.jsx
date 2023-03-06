import React from 'react'
import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import { Navigation, Pagination ,Scrollbar,A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const MenuSlider = () => {
  const dispatch=useDispatch()
  const swiperRef = useRef();
  const categories=["Все" ,"Мясные" ,"Вегетарианская", "Острые",  "Гриль" ,"Закрытые" ,"Гарнир" , "Десерты", "Напитки"]
  const categoryId=useSelector(state=>state.filterSlice.categoryId)
  return (
    <div className='home-menu'>
        <div className='container'>
          <div className='row'>
            <div className='menu-block'>
            <div><img src='./img/prev.svg' className='prevBtn' onClick={() => swiperRef.current?.slidePrev()}/></div>
             
        
            <Swiper
            spaceBetween={105}
             
             slidesPerView={5}
             className="mySwiper"
             modules={[Navigation]}
             onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            //  pagination={{ clickable: true }}
            //  scrollbar={{ draggable: true }}
            //  onSwiper={(swiper) => console.log(swiper)}
            //  onSlideChange={() => console.log('slide change')}    
             
             >
              {/* {categories.map((value,i)=>{
                <SwiperSlide className='menu'><span>{value}</span></SwiperSlide>
              })} */}
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(0))}}>{categories[0]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(1))}}>{categories[1]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(2))}}>{categories[2]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(3))}}>{categories[3]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(4))}}>{categories[4]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(5))}}>{categories[5]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(6))}}>{categories[6]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(7))}}>{categories[7]}</span>
              </SwiperSlide>
              <SwiperSlide className='menu'> 
                <span onClick={()=>{dispatch(setCategoryId(8))}}>{categories[8]}</span>
              </SwiperSlide>
              
                          </Swiper>
                          <div>
        
      <img src='./img/next.svg'  onClick={() => swiperRef.current?.slideNext()} className="nextBtn"/>
      </div>
      
            </div>
          </div>
        </div>
      </div>
  )
}

export default MenuSlider
