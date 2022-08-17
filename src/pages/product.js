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
  const [sort , setSort] = useState("pdesc");
  
  const location = useLocation();
  const cat = location.search.substring(1);
  const URL = cat ? `http://localhost:5000/api/products/?${cat}` : "http://localhost:5000/api/products/";
  console.log(cat);

  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    const getData = async ()=>{
      const res = await fetch(URL,{
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmEyZDc3OWEwODMxZTEyODM0YzQ5ZCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjA2Njk1MDYsImV4cCI6MTY2MDkyODcwNn0.CIBDBqYfwPAXwNd5Zx2iBW5_6uB5oyhKDHX1t_SbfO0"
        }
      } , {
        signal:signal
      });

      if( res.status !== 200) {
          setAllProduct([]);
          return;
      }
      const data = await res.json();
      setAllProduct(data);
    }
    getData();
    setSort("pasc");

    return (()=>{
      abortController.abort();
    })

  },[cat]);

  useEffect(()=>{
    if(allProduct.length !== 0){
      if(sort === "pdesc"){
        setAllProduct(allProduct.sort((a,b)=>{ return parseInt(a.price) - parseInt(b.price)}));
      }
      else if(sort === "pasc") {
        setAllProduct(allProduct.sort((a,b)=>{ return parseInt(b.price) - parseInt(a.price)}));
      }
      console.log(sort);
    }
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
      <div className='container gap-3 d-flex flex-column'>
        { allProduct.length ? allProduct.map((item)=>(
          <ProductCard key={item._id} data={item}/>
        )) 
        : (
        <div className="outer-product-container d-flex display-6">PRODUCT NOT FOUND</div>
        )}
      </div>
      <Footer/>
    </>
    
  )
}

export default Product