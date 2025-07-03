import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <NavLink to='/'>yeonFLIX</NavLink>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>고객센터</NavLink>
        <NavLink to='/'>이용약관</NavLink>
        <NavLink to='/'>개인정보처리방침</NavLink>
        <NavLink to='/'>법적고지</NavLink>
        <NavLink to='/'>이벤트</NavLink>
        <NavLink to='/'>인재채용</NavLink>
      </div>
    </footer>
  )
}

export default Footer