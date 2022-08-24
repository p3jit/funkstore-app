/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState , useContext } from 'react'
import Navbar from '../components/navbar/navbar';
import Subheader from '../components/subheader/subheader';
import Footer from '../components/footer/footer';
import Filter from '../components/filter/filter';
import ProductCard from '../components/productCard/productCard';
import {useLocation} from 'react-router-dom';
import { Products } from '../context/productContext';

function Product() {
  //Context
  const {allProduct , setAllProduct} = useContext(Products);

  //Local States
  const [sort , setSort] = useState("asc");
  const [isLoading , setIsLoading] = useState(true); 

  const location = useLocation();
  const cat = location.search.substring(1);

  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    const URL = cat ? `${process.env.REACT_APP_API_URL}products/?${cat}` : `${process.env.REACT_APP_API_URL}products/`;
    const qSort = sort ? cat ? `&sort=${sort}` : `?&sort=${sort}` : '';

    const getData = async ()=>{
      const res = await fetch(URL+qSort , {signal:signal});

      if( res.status !== 200) {
          setAllProduct([]);
          setIsLoading(false);
          return;
      }
      const data = await res.json();
      setAllProduct(data);
      setIsLoading(false);
    }
    getData();

    return (()=>{
      abortController.abort();
    })
  },[cat,sort]);

  useEffect(()=>{
    setIsLoading(true);
  },[sort]);

  return (
    <>
      <Navbar/>
      <Subheader/>
      <div className="sale-banner d-flex justify-content-center bg-success">
        <h4 className='display-7 pt-2'>SALE 20% OFF</h4>
      </div>
      {
        allProduct.length ? <Filter setSort={setSort}/> : ""
      }
      <div className='container gap-3 d-flex flex-column pb-5 mb-5'>
        { !isLoading && allProduct.length ? allProduct.map((item)=>(
          <ProductCard key={item._id} data={item} id={item._id}/>
        )) 
        : (
        <div className="outer-product-container d-flex display-6">{ isLoading ? "LOADING" : "NOT FOUND"}</div>
        )}
      </div>
      <Footer/>
    </>
    
  )
}

export default Product