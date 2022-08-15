import React from 'react'
import Card from "../components/card/card";
import Carousel from "../components/carousel/Carousel";

function Home() {
  return (
    <div className="container-lg ">
        <Carousel/>
        <div className="row py-2">
          <div className="col-sm-12 col-md-4"><Card title="JWELERRY" imgName="jw1"/></div>
          <div className="col-sm-12 col-md-4"><Card title="MOBILE" imgName="mob1"/></div>
          <div className="col-sm-12 col-md-4"><Card title="LAPTOP" imgName="lap1"/></div>
        </div>
        <div className="row py-2">
          <div className="col-sm-12 col-md-4"><Card title="MEN" imgName="men1"/></div>
          <div className="col-sm-12 col-md-4"><Card title="WOMEN" imgName="women1"/></div>
          <div className="col-sm-12 col-md-4"><Card title="CAMERA" imgName="camera2"/></div>
        </div>
      </div>
  )
}

export default Home