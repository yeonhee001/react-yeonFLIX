import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';

import { tvdbStore } from '../tvdbState';
import HomeTopTitle from '../component/HomeTopTitle';
import CardSlide from '../component/CardSlide';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';

function Home() {
  const { fetchData, data } = tvdbStore();
  
  useEffect(()=>{
    fetchData('moviesPopu');
    fetchData('moviesTop');
    fetchData('tvPopu');
    fetchData('tvTop');

    window.scrollTo(0,0);
  },[])
  
  return (
    <div className='home'>
      <Swiper 
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }} 
      className="mySwiper0">
        {
          data.moviesPopu.map((item) =>
            <SwiperSlide className='home1' key={item.id}>
              <div className='bgimg'>
                <img src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : ""}/>
              </div>
              <div className='tximg'>
                <div className='main-img'>
                  <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : "/img/no_image2.png"}/>
                </div>
                <div className='main-text'>
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                  <NavLink to={`/movies/${item.id}`} >상세보기</NavLink>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>

      <div className='home2'>
        <HomeTopTitle title={'오늘의 TOP 20'} data={'movies'}/>
        <CardSlide data={data.moviesPopu} link={'movies'}/>
      </div>

      <div className='home3'>
        <HomeTopTitle title={'믿고 보는 영화 추천작'} data={'movies'}/>
        <CardSlide data={data.moviesTop} link={'movies'}/>
      </div>

      <div className='home4'>
        <HomeTopTitle title={'꼭 봐야하는 TV시리즈'} data={'tvseries'}/>
        <CardSlide data={data.tvPopu} link={'tvseries'}/>
      </div>

      <div className='home5'>
        <HomeTopTitle title={'이 드라마 어떠세요?'} data={'tvseries'}/>
        <CardSlide data={data.tvTop} link={'tvseries'}/>
      </div>
    </div>
  )
}

export default Home