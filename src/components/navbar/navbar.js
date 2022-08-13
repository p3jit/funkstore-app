import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <h4>FunkStore.</h4>
            </div>
            <div className='search-container'>
                <input className='search-bar'/>
            </div>
            <div className='cart-account-container'>
                <div className='account-container'>Register/Sign in</div>
                <div className='cart-container'>Cart</div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar