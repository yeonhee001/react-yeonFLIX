import React from 'react'


function Card({item}) {

  return (
    <>
      <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : "/img/no_image2.png"}/>
      <p>{item.title ? item.title : item.name}</p>
      <span>{item.release_date ? item.release_date : item.first_air_date}</span>
      <span>평점 {item.vote_average ? item.vote_average : item.vote_average}</span>
      <div className='hov_more'>
        <span>자세히 보기 →</span>
      </div>
    </>
  )
}

export default Card