import React from 'react'
import "./productCard.css"

function ProductCard() {
  return (
    <>
      <div className="product-container d-flex">
        <div className='row'>
        <img src='./assets/productImages/mob3.jpg' className='img-fluid product-img col' alt='productImage'></img>
          <div className='product-desc flex-grow-1 pt-4 col'>
            <h2 className='display-6'>TITLE</h2>
            <h4 className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat, nam fuga consequatur recusandae velit necessitatibus nulla at tempora harum quasi iste dolor commodi, exercitationem odio labore vero quia nostrum!</h4>
            <h4 className='pt-2'>PRICE: 4000/- Rs</h4>
            <div className="quantity-group d-flex pt-2 align-items-center">
              <h5 className='pt-1'>QUANTITY:</h5>
              <input type={'number'} min={"0"} defaultValue="1" className='mx-4'/>
              <button className='btn btn-outline-secondary btn-sm'>ADD TO CART</button>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard