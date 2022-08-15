import React from 'react'
import Card from "../components/card/card";
import Carousel from "../components/carousel/Carousel";
import Navbar from '../components/navbar/navbar';
import Subheader from '../components/subheader/subheader';
import Footer from '../components/footer/footer';
import "./home.css"

function Home() {
  return (
    <>
      <Navbar/>
      <Subheader/>
      <div className="container-lg ">
          <Carousel/>
          <div className="row py-2">
            <div className="col-sm-12 col-md-4"><Card title="JWELERRY" imgName="jw1"/></div>
            <div className="col-sm-12 col-md-4"><Card title="MOBILE" imgName="mob1"/></div>
            <div className="col-sm-12 col-md-4"><Card title="LAPTOP" imgName="lap1"/></div>
          </div>
          <h3 className='text-center text-white py-2 browse-all-btn'>Browse all</h3>
          <div className="row py-2">
            <div className="col-sm-12 col-md-4"><Card title="MEN" imgName="men1"/></div>
            <div className="col-sm-12 col-md-4"><Card title="WOMEN" imgName="women1"/></div>
            <div className="col-sm-12 col-md-4"><Card title="CAMERA" imgName="camera2"/></div>
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default Home