import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import foodlogo from "../Components/images/foodlogo-removebg-preview.png"
import {Link} from 'react-router-dom'


function Header() {

  return (
    <header>
        <img src= {foodlogo} alt="" className='logo'/>
        <div className="inputBox">
            <SearchRounded className="searchIcon"/>
            <input type="text" placeholder="Search"/>
        </div>
        <div className="shoppingCart">
            <ShoppingCartRounded className="cart"/>
            <div className="cart_content">
                <p>2</p>
            </div>
        </div>
        <Link to='/login' className="profileContainer">
            <button className="imgBox">
                <p>sign out</p>
            </button>
            <h2 className="userName">Pablo</h2>
        </Link>
        <div className="toggleMenu ">
            <BarChart className="toggleIcon"/>
        </div>
    </header>
  )
}

export default Header
