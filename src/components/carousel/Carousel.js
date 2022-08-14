import React from 'react'
import "./Carousel.css"
function Carousel() {
  return (
    <>
        <div className='carousel-container'>
            <div className='arrow'>◄</div>
            <div className='img-container'></div>
            <div className='arrow right'>►</div>
        </div>
    </>
    
  )
}

export default Carousel