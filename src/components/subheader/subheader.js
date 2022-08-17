import React from 'react'
import { Link } from 'react-router-dom'
import "./subheader.css"

function Subheader() {
  return (
    <>
        <div className='subheader-container'>
            <Link  to="/products/?category=mobile" className='subheader-item'>MOBILE</Link>
            <Link  to="/products/?category=laptop" className='subheader-item'>LAPTOP</Link>
            <Link  to="/products/?category=jewellery" className='subheader-item'>JEWELLERY</Link>
            <Link  to="/products/?category=men" className='subheader-item'>MEN</Link>
            <Link  to="/products/?category=women" className='subheader-item'>WOMEN</Link>
            <Link  to="/products/?category=camera" className='subheader-item'>CAMERA</Link>
        </div>
    </>
    
  )
}

export default Subheader