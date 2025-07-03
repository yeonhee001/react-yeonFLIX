import { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import { tvdbStore } from '../tvdbState';
import { NavLink, useParams } from 'react-router-dom';
import Card from '../component/Card';

function List() {
  
  const { data,fetchData,detail,selectItem,genres,movieGenres,tvGenres } = tvdbStore();

  let pathName = window.location.pathname;
  let pathParts = pathName.split('/');

  let type = pathParts[1];
  const { id } = useParams();
  
  useEffect(()=>{
    fetchData('get');
    movieGenres('get');
    tvGenres('get');
    
    let type = pathName.includes("movie") ? "movie" : pathName.includes("tv") ? "tv" :''
    detail(type,id);
  },[type,id])
    
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  if(!selectItem || Object.keys(selectItem).length === 0) return;

  return (
    <div className='list'>
      <div className='top'>
        <div className='bgimg' >
            <img src={selectItem.backdrop_path ? `https://image.tmdb.org/t/p/original/${selectItem.backdrop_path}` : ""}/>
          <div className='imgtex'>
            <p>
              <img src={ selectItem.poster_path ? `https://image.tmdb.org/t/p/w500/${selectItem.poster_path}` : "/img/no_image.jpg"}/>
            </p>
            <div className='text'>
              <h2>{selectItem.title || selectItem.name}</h2>
              <div className='pre'>
                {
                  selectItem?.genres.map((item)=>{
                    return <span key={item.id}> {item.name} </span>
                  })
                }
              </div>
              <p> {selectItem.overview} </p>
              <div className='etc'>
                <div className='dayaver'>
                  <div className='day'>
                    <p>Date</p>
                    <span>{selectItem.release_date || selectItem.first_air_date}</span>
                  </div>
                  <div className='aver'>
                    <p>평점</p>
                    <span>{selectItem.vote_average}</span>
                  </div>
                </div>
                <div className='cast'>
                  {selectItem.casts ?
                    selectItem.casts.cast.slice(0,5).map((item)=>
                      <div  key={item.credit_id}>
                        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : "/img/no_image2.png"} alt="" />
                        <p>{item.name}</p>
                      </div>
                    ) : 
                    selectItem.created_by.map((item)=>
                      <div  key={item.credit_id}>
                        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : "/img/no_image2.png"} alt="" />
                        <p>{item.name}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='vid'>
        {
          selectItem.videos.results.map((item)=>
            <div key={item.id} >
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.key}?si=jQ9obX2u8EKxtTs-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`} referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          )
        }
      </div>
      )

      <div className='another'>
        <h2>베스트 작품 둘러보기</h2>
        <div className='ano-mov'>
          <Swiper
          slidesPerView={6}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          className="mySwiper00"
          >
            {
            type == "movies" ? 
              data.moviesTop.map((item)=>
                <SwiperSlide className='list' key={item.id}>
                  <NavLink to={`/movies/${item.id}`}>
                    <Card item={item}/>
                  </NavLink>
                </SwiperSlide>
              ) : 
              data.tvTop.map((item)=>
                <SwiperSlide className='list' key={item.id}>
                  <NavLink to={`/tvseries/${item.id}`}>
                    <Card item={item}/>
                  </NavLink>
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default List