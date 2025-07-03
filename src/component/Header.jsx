import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const head = useRef(null);


  useEffect(()=>{
  // 처음 렌더링 될때 실행, 한번만 실행되어야하는 스크롤이벤트를 설정하기 위해
    const header = ()=>{
      // if (!head.current) return;

      if(window.scrollY > 10){
        head.current.classList.add("active");
      }else{
        head.current.classList.remove("active");
      }
    };
    
    window.addEventListener("scroll", header);
    return()=>{
      window.removeEventListener("scroll", header);
      // 컴포넌트가 화면에 나타나지 않을때 이벤트 제거(언마운트될 때)
    }
  },[]);

  const headClick = (path) => {
    window.location.href = path; // 이 방법으로 페이지가 새로고침됨
  };
  

  return (
    <header ref={head} className="header">
      <NavLink to='/'>yeonFLIX</NavLink>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies' onClick={()=>headClick('/movies')}>Movies</NavLink>
        <NavLink to='/tvseries' onClick={()=>headClick('/tvseries')}>TV Series</NavLink>
      </div>
    </header>  
  )
}

export default Header