import React, { useEffect, useState } from 'react'
import "./productCard.css"

function ProductCard({data}) {
  const [qty,setQty] = useState(1);

  useEffect(()=>{
    // console.log(qty);
  },[qty])

  return (
    <>
      <div className="product-container">
        <div className='row gap-sm-5 gap-md-0'>
          <div className='col-md-5 product-img-container p-5 d-flex'>
            <img src={`/assets/productImages/${data.img}`} className='product-img img-fluid flex-grow-1' alt='productImage'></img>
          </div>
          <div className='product-desc p-4 col-md-7 d-flex flex-column justify-content-center'>
            <h2 className='display-6'>{data.title}</h2>
            <h4 className='text-muted'>{data.desc}</h4>
            <h4 className='pt-2'>PRICE: {data.price}/- Rs</h4>
            <div className="quantity-group d-flex pt-2 align-items-center">
              <h5 className='pt-1'>QUANTITY:</h5>
              <input type={'number'} min={"0"} defaultValue="1" className='mx-4' onChange={(e)=>{setQty(e.target.value)}}/>
              <button className='btn btn-outline-secondary btn-sm'>ADD TO CART</button>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard