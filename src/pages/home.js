import React from 'react'
import Card from "../components/card/card";
import Carousel from "../components/carousel/Carousel";
import Navbar from '../components/navbar/navbar';
import Subheader from '../components/subheader/subheader';
import Footer from '../components/footer/footer';
import "./home.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar/>
      <Subheader/>
      <div className="container-lg ">
          <Carousel/>
          <div className="row py-2">
            <Link to="/products/?category=jewellery"  className="col-sm-12 col-md-4"><Card title="JWELERRY" imgName="jw1"/></Link>
            <Link to="/products/?category=mobile" className="col-sm-12 col-md-4"><Card title="MOBILE" imgName="mob1"/></Link>
            <Link to="/products/?category=laptop" className="col-sm-12 col-md-4"><Card title="LAPTOP" imgName="lap1"/></Link>
          </div>
          <Link to="/products/" className='text-center text-white py-2 browse-all-btn d-flex'>BROWSE ALL</Link>
          <div className="row py-2">
            <Link to="/products/?category=men" className="col-sm-12 col-md-4"><Card title="MEN" imgName="men1"/></Link>
            <Link to="/products/?category=women" className="col-sm-12 col-md-4"><Card title="WOMEN" imgName="women1"/></Link>
            <Link to="/products/?category=camera" className="col-sm-12 col-md-4"><Card title="CAMERA" imgName="camera2"/></Link>
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default Home