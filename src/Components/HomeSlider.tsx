
import { Navigation, Pagination ,Scrollbar,A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import React from 'react'
const HomeSlider:React.FC= () => {
  return (
    <div className="home-slider">
    <div className="container">
      <div className="row">
        <div className="block">
        <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
    speed={1000}
    spaceBetween={200}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay,Pagination,Navigation]}
    className="mySwiper"
  >
    <SwiperSlide className='block'>
      
      <h2>Подарок на первый заказ.</h2>
      <p>Получите 500 рублей за подписку на рассылку</p>
      <button>Подписаться</button>
      <img src="./img/sliderImg.png" alt="sliderimg" />

    </SwiperSlide>
    <SwiperSlide className='block'>
      
    <h2>Подарок на первый заказ.</h2>
      <p>Получите 500 рублей за подписку на рассылку</p>
      <button>Подписаться</button>
      <img src="./img/sliderImg.png" alt="sliderimg"/>
    </SwiperSlide>

  </Swiper>

        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeSlider
