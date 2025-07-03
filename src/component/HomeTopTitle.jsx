import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeTopTitle({title, data}) {
  return (
    <div className='title'>
      <h3>{title}</h3>
      <NavLink to={`/${data}`}>view more</NavLink>
    </div>
  )
}

export default HomeTopTitle