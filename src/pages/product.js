import React from 'react'
import Navbar from '../components/navbar/navbar';
import Subheader from '../components/subheader/subheader';
import Footer from '../components/footer/footer';
import Filter from '../components/filter/filter';
import ProductCard from '../components/productCard/productCard';

function Product() {
  return (
    <>
      <Navbar/>
      <Subheader/>
      <div className="sale-banner d-flex justify-content-center bg-success">
        <h4 className='display-7 pt-2'>SALE 50% OFF</h4>
      </div>
      <Filter/>
      <div className='container gap-3 d-flex flex-column'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <Footer/>
    </>
    
  )
}

export default Product