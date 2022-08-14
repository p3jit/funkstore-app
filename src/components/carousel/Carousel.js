import React, { useState , useEffect , useRef} from 'react'
import "./Carousel.css"
import { carouselImages } from "../../data"

function Carousel() {
  const [currSlide , setCurrSlide] = useState(0);
  const imageContainerRef = useRef();

  //Function to change the Slides with buttons
  function changeSlide(val) {
    if(currSlide + val > carouselImages.length - 1) {
      setCurrSlide(0);
    }
    else if(currSlide + val < 0) {
      setCurrSlide(carouselImages.length-1);
    }
    else {
      setCurrSlide(currSlide+val);
    }
    console.log(currSlide);
  };

  return (
    <>
      <div className='carousel-container'>
          <div className='arrow' onClick={()=>{changeSlide(-1)}}>◄</div>
          <div className='img-container' ref={imageContainerRef} style={{ backgroundImage: `url(${require(`../../../public/assets/bannerImages/${carouselImages[currSlide]}`)})`}}></div>
          <div className='arrow right' onClick={()=>{changeSlide(1)}}>►</div>
      </div>
    </>
    
  )
}

export default Carousel