import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div  className='header'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Header