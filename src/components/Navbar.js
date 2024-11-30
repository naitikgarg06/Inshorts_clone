import React from 'react'
import './Navbar.css'
import HamburgerHover from './HamburgerHover'

const Navbar = ({setCategory, setLoadMore}) => {
  return (
    <div className='navbar'>
      <div className='hamburger'><HamburgerHover setCategory={setCategory} setLoadMore = {setLoadMore}/></div>
      <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'/>
    </div>
  )
}

export default Navbar
