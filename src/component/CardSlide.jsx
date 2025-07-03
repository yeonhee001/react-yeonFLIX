import { NavLink } from 'react-router-dom'
import Card from './Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';

function CardSlide({data, link}) {
  return (
    <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper02"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },  // 모바일
          480: { slidesPerView: 3, spaceBetween: 15 },  // 작은 태블릿
          768: { slidesPerView: 4, spaceBetween: 20 },  // 태블릿
          1024: { slidesPerView: 5, spaceBetween: 25 }, // 작은 데스크탑
          1280: { slidesPerView: 6, spaceBetween: 30 }, // 기본 (넓은 화면)
        }}  
        >
          {
            data.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/${link}/${item.id}`} >
                  <Card item={item}/>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
  )
}

export default CardSlide